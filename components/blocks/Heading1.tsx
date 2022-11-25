import { cva, VariantProps } from "class-variance-authority";

const textStyles = cva("cva-h1", {
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
}

export const Heading1 = ({
  bold,
  italic,
  strikethrough,
  underline,
  children,
}: TextProps) => {
  return (
    <span className={textStyles({ bold, italic, underline, strikethrough })}>
      {children}
    </span>
  );
};
