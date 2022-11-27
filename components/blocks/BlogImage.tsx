import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";

export const BlogImage = ({ block }: { block: BlockObjectResponse }) => {
  if (block.type === "image" && block.image.type === "external") {
    return (
      <Image
        key={block.id}
        alt={block.image.caption.map((part) => part.plain_text).join()}
        src={block.image.external.url}
        className="rounded"
        width="100"
        height="100"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    );
  }

  if (block.type === "image" && block.image.type == "file") {
    return (
      <Image
        key={block.id}
        alt={block.image.caption.map((part) => part.plain_text).join()}
        src={block.image.file.url}
        className="rounded"
        width="100"
        height="100"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    );
  }
};
