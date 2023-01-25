export const fileToDataUrl = (file: File) =>
  new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader?.readAsDataURL(file);
      reader.onload = () => resolve(reader?.result);
      reader.onerror = (error) => reject(error);
    } catch (err) {
      console.log(err);
    }
  });

export const dataUrlToFile = (
  dataURI: string,
  fileName: string = "file.png"
) => {
  try {
    var byteString = atob(dataURI.split(",")[1]);
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new File([ab], fileName, { type: mimeString });
  } catch (err) {
    return new File([], fileName);
  }
};
