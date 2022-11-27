import { cva, VariantProps } from "class-variance-authority";

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

export interface CodeProps extends VariantProps<typeof textStyles> {
  children: string;
  block: any;
}

export const Code = ({ block }: CodeProps) => {
  console.log({ codeBlock: block });
};
