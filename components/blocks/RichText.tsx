import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { cva } from "class-variance-authority";

const textStyles = cva("", {
  variants: {
    italic: {
      true: "italic",
    },
    bold: {
      true: "font-bold",
    },
    underline: {
      true: "underline",
    },
    strikethrough: {
      true: "line-through",
    },
    code: {
      true: "font-mono text-red-700 px-1 bg-gray-300",
    },
  },
});

export interface RichTextProps {
  rich_text: RichTextItemResponse[];
}

export const RichText = ({ rich_text }: RichTextProps) => {
  return (
    <>
      {rich_text.map((text, index) => {
        const { href, annotations, plain_text } = text;
        const { bold, code, italic, underline, strikethrough } = annotations;

        if (href) {
          const isExternal = href.startsWith("https://");

          return (
            <a
              key={index}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={textStyles({
                bold,
                italic,
                underline,
                strikethrough,
                code,
              })}
            >
              {plain_text}
            </a>
          );
        }

        return (
          <span
            key={index}
            className={textStyles({
              bold,
              italic,
              underline,
              strikethrough,
              code,
            })}
          >
            {plain_text}
          </span>
        );
      })}
    </>
  );
};
