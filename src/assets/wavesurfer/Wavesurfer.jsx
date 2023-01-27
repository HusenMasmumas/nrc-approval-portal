
import { useCallback, useRef, useState, useMemo } from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import { Progress } from "antd";
import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min";
import { CaretRightOutlined, StepForwardOutlined, StepBackwardOutlined, RetweetOutlined, PauseOutlined } from "@ant-design/icons";

const ViewWaveSurfer = () => {
  const wavesurferRef = useRef();
  const [playPosition, setPlayPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false)


  const plugins = useMemo(() => {
    return [
      {
        plugin: RegionsPlugin,
        // options: { dragSelection: true },
      },
    ].filter(Boolean);
  }, []);

  const handleWSMount = useCallback((waveSurfer) => {
    if (waveSurfer.markers) {
      waveSurfer.clearMarkers();
    }

    wavesurferRef.current = waveSurfer;

    if (wavesurferRef.current) {
      wavesurferRef.current.load(
        "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
      );

      if (window) {
        window.surferidze = wavesurferRef.current;
      }
    }

    wavesurferRef.current.on("ready", () => {
      setDuration(wavesurferRef.current.getDuration());
    });

    wavesurferRef.current.on("seek", () => {
      setPlayPosition(wavesurferRef.current.getCurrentTime());
    });

    wavesurferRef.current.on("audioprocess", () => {
      setPlayPosition(wavesurferRef.current.getCurrentTime());
    });


  }, []);

  const formatTime = (time) => {
    return [
      Math.floor((time % 3600) / 60), // minutes
      ("00" + Math.floor(time % 60)).slice(-2), // seconds
    ].join(":");
  };

  const play = useCallback(() => {
    wavesurferRef.current.playPause();

  }, []);

  const setValuePlaying = () => {
    setPlaying(!playing)
  }

  const seek = (position) => {
    wavesurferRef.current.setCurrentTime(position);
  };

  const playValue = (position) => {
    // wavesurferRef.current.play();
    wavesurferRef.current.pause();
    if (position !== undefined && !position !== null) {
      seek(position);
    }
  };

  const test = (e) => {

    let data = 100 / duration
    if (playPosition === duration) {
      return 100
    }

    return (data * e) + 0.9



  }

  return (
    <div className="pt-[20px]">
      <WaveSurfer plugins={plugins} onMount={handleWSMount}>
        <WaveForm
          id="waveform"
          progressColor="#777777"
          waveColor="#B2B2B2"
          cursorColor="#ffffff00"
          barWidth={3}
          responsive={true}
        ></WaveForm>
        <div id="timeline" />
      </WaveSurfer>




      <div className="flex items-center pt-[20px]">
        <div className="pr-[10px]">
          {formatTime(playPosition)}
        </div>

        <Progress percent={test(playPosition)} showInfo={false} status="active" strokeColor={{ '0%': '#B2B2B2', '100%': '#B2B2B2' }} />

        <div className="pl-[10px]">
          {formatTime(duration)}
        </div>
      </div>

      <div className="w-full flex justify-center items-center">

        <div >
          <RetweetOutlined className="text-[#B2B2B2] text-[25px]" />
        </div>

        <div className="mr-[10px] ml-[10px]">

          <StepBackwardOutlined className="text-[#B2B2B2] text-[30px]" />
        </div>
        <div className="h-[50px] w-[50px] border-solid border-[1px] border-[#00000029] rounded-full flex justify-center shadow-play" onClick={() => {
          play()
          setValuePlaying()
        }} >
          {
            !!playing ? <PauseOutlined className=" text-[40px]" /> : <CaretRightOutlined className=" text-[40px]" />
          }
        </div>

        <div className="ml-[10px]">
          <StepForwardOutlined className="text-[#B2B2B2] text-[30px]" />
        </div>
        <div className="ml-[10px]">
          <RetweetOutlined className="text-[#B2B2B2] text-[25px]" />
        </div>

      </div>

    </div>
  )
}

export default ViewWaveSurfer