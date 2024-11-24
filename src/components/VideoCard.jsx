const VideoCard = ({info}) => {
    if(!info) return null;
    const { snippet, statistics  } = info;
    const { channelTitle, title, thumbnails } = snippet;
  return <div className="p-2 m-2 w-72 shadow-lg cursor-pointer">
    <img className="rounded-lg" src={thumbnails.medium.url} alt="Video Thumnail"></img>
    <p className="text-lg py-2 font-bold">{title}</p>
    <p className="font-bold text-sm text-gray-700">{channelTitle}</p>
    <p className="font-bold text-sm text-gray-700">{Math.floor(statistics.viewCount/1000)}K views</p>
  </div>;
};

export default VideoCard;
