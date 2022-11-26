import { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface Props {
  videoBlock: VideoBlockObjectResponse;
}

export const Video = ({ videoBlock }: Props) => {
  if (videoBlock.video.type === "external") {
    return (
      <iframe
        className="youtube-iframe rounded"
        src={videoBlock.video.external.url.replace("watch?v=", "embed/")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (videoBlock.video.type === "file") {
    return (
      <video
        playsInline
        controls
        preload="metadata"
        src={videoBlock.video.file.url}
      />
    );
  }

  return null;
};
