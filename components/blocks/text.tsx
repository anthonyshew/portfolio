import { cva, VariantProps } from "class-variance-authority";

const textStyles = cva("text-base", {
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

export const Text = ({
  bold,
  italic,
  strikethrough,
  underline,
  children,
}: TextProps) => {
  return (
    <p className={textStyles({ bold, italic, underline, strikethrough })}>
      {children}
    </p>
  );
};
