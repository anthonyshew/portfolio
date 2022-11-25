import { cva, VariantProps } from "class-variance-authority";

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

export interface TextProps extends VariantProps<typeof textStyles> {
  children: string;
  href?: string;
}

export const Text = ({
  bold,
  italic,
  href,
  strikethrough,
  underline,
  code,
  children,
}: TextProps) => {
  if (href) {
    const isExternal = href.startsWith("https://");

    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={textStyles({ bold, italic, underline, strikethrough, code })}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      className={textStyles({ bold, italic, underline, strikethrough, code })}
    >
      {children}
    </span>
  );
};
