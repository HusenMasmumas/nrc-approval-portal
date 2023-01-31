import { IWaveSurferContext } from "./interface";
import { createContext, useContext, useState } from "react";

const MainWaveSurferContext = createContext<IWaveSurferContext>(
  {} as IWaveSurferContext
);

const MainWaveSurferProvider = ({
  children,
  value,
}: {
  children: JSX.Element;
  value: any;
}) => {
  const [playPosition, setPlayPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);
  return (
    <MainWaveSurferContext.Provider
      value={{
        playPosition,
        setPlayPosition,
        duration,
        setDuration,
        playing,
        setPlaying,
        ...value,
      }}
    >
      {children}
    </MainWaveSurferContext.Provider>
  );
};

export const useMainWaveSurfer = () => useContext(MainWaveSurferContext);
export default MainWaveSurferProvider;
