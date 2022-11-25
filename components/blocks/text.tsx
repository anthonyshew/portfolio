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
    code: {
      true: "font-mono text-red-700 border",
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
  code,
  children,
}: TextProps) => {
  return (
    <span
      className={textStyles({ bold, italic, underline, strikethrough, code })}
    >
      {children}
    </span>
  );
};
