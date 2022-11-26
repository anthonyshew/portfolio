import { cva, VariantProps } from "class-variance-authority";
import { isFullBlock } from "@notionhq/client";

const textStyles = cva("cva-p", {
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
  },
});

export interface TextProps extends VariantProps<typeof textStyles> {
  children: string;
  block: any;
}

export const Code = ({ block }: TextProps) => {
  console.log({ block });
};
