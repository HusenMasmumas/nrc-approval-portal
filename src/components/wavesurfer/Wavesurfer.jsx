
import { useCallback, useRef, useMemo } from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import { Slider } from "antd";
import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min";
import { CaretRightOutlined, StepForwardOutlined, StepBackwardOutlined, RetweetOutlined, PauseOutlined } from "@ant-design/icons";
import Song from "assets/song/SoundHelix-Song-2.mp3"
import { useMainWaveSurfer } from "providers/wavesurfer";
import { formatTime } from "tools/util";

const ViewWaveSurfer = () => {
  const { playPosition,
    setPlayPosition,
    duration,
    setDuration,
    playing,
    setPlaying, } = useMainWaveSurfer()
  const wavesurferRef = useRef();

  const plugins = useMemo(() => {
    return [
      {
        plugin: RegionsPlugin,
        // options: { dragSelection: true },
      },
    ].filter(Boolean);
    // eslint-disable-next-line
  }, []);

  const handleWSMount = useCallback((waveSurfer) => {
    if (waveSurfer.markers) {
      waveSurfer.clearMarkers();
    }

    wavesurferRef.current = waveSurfer;

    if (wavesurferRef.current) {
      wavesurferRef.current.load(
        Song
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

    // eslint-disable-next-line
  }, []);



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
    setPlayPosition(position)
    // wavesurferRef.current.play();
    // wavesurferRef.current.pause();
    if (position !== undefined && !position !== null) {
      seek(position);
    }
  };

  const formatter = (value) => `${formatTime(value)}`;

  return (
    <div className="pt-[20px]">
      <div style={{ position: "relative" }}>

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

        {/* <div style={{ position: "absolute", backgroundColor: "red", bottom: 50 }} className="w-full ">
          test
        </div> */}
        <div style={{ position: "absolute", bottom: 0, backgroundColor: "#E7E7E7" }} className="w-full h-[50px]" >
        </div>
      </div>

      <div className="flex items-center pt-[20px]">
        <div className="pr-[10px]">
          {formatTime(playPosition)}
        </div>

        <div className="w-full">
          <Slider
            min={0}
            max={duration}
            onChange={playValue}
            value={playPosition}
            tooltip={{ formatter }}
          />
        </div>



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