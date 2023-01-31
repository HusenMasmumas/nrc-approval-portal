export interface IWaveSurferContext {
  playPosition: number;
  setPlayPosition: (e: number) => void;
  duration: number;
  setDuration: (e: number) => void;
  playing: boolean;
  setPlaying: (e: boolean) => void;
}
