export default function VideoComponent({video, poster}: {video: string, poster: string}) {
  return (
    <div>
        <video src={video} loop controls muted itemType='video/mp4' poster={poster}/>
    </div>
  );
}