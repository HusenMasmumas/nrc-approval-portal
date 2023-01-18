import React from "react";
import Nopage from "assets/img/nopage.svg";
const NotFoundPage = () => {
  return (
    <div>
      <img
        src={Nopage}
        alt="nodata"
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
};

export default NotFoundPage;
