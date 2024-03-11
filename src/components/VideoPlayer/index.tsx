import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import YouTube, { YouTubeProps } from "react-youtube";
import { getMovieVideos } from "../../services/api-movies";
import { showToast } from "../../utils/toast";
import { Video } from "../../types";
import { Loader } from "..";

import "./style.scss";

const VideoPlayer = () => {
  const { id: videoId } = useParams();
  const navigate = useNavigate();

  const [video, setVideo] = useState<Video | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const onStateChange: YouTubeProps["onStateChange"] = (event) => {
    if (!event.data) {
      showToast({
        type: "info",
        message: "The movie has ended",
      });

      navigate(-1);
    }
  };

  const onError: YouTubeProps["onError"] = () => {
    showToast({
      type: "error",
      message: "Movie not available",
    });

    navigate(-1);
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  useEffect(() => {
    const getVideo = async () => {
      const response = await getMovieVideos(videoId);
      if (response?.videos) {
        const videos = response.videos.results;
        setVideo(
          videos.find(
            (video: Video) =>
              video.site === "YouTube" && video.type === "Trailer"
          )
        );
        setIsLoading(false);
      }
    };

    getVideo();
  }, []);

  return isLoading ? (
    <Loader type="screen" />
  ) : (
    <div className="video-player">
      <Link
        to={"/back"}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className="btn btn-warning"
      >
        <i className="bi bi-arrow-left me-2"></i>
        <span>Back</span>
      </Link>

      <YouTube
        videoId={video?.key}
        opts={opts}
        onStateChange={onStateChange}
        onError={onError}
      />
    </div>
  );
};

export default VideoPlayer;
