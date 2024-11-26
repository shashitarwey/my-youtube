import VideoCard, { AdvVideoCard } from './VideoCard';
import { useEffect, useState } from 'react';
import { YOUTUBE_API_VIDEOS } from '../utils/constants';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const [videos, SetVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_VIDEOS);
    const json = await data.json();
    SetVideos(json.items);
  };
  if (!videos) return null;
  return (
    <div className="flex flex-wrap mx-4">
      {videos[0] && <AdvVideoCard info={videos[0]}></AdvVideoCard>} {/** Higher Order Component */}
      {videos.map((video) => (
        <Link key={video.id} to={'watch?v=' + video.id}>
          <VideoCard info={video}></VideoCard>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
