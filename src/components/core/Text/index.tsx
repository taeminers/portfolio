import React from "react";
import text, { color } from "./styles.css";
import clsx from "clsx";

interface TextProps extends React.HTMLProps<HTMLElement> {
  children?: React.ReactNode;
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6"
    | "heading7"
    | "heading8"
    | "heading9"
    | "heading10"
    | "heading11"
    | "body1"
    | "body2"
    | "body3"
    | "body4"
    | "body5"
    | "body6"
    | "label1"
    | "label2"
    | "caption1";
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  bold?: boolean;
  color?: keyof typeof color;
}

const Text = ({
  as = "span",
  children,
  variant = "body3",
  className,
  bold,
  color,
  ...props
}: TextProps) => {
  return React.createElement(
    as,
    { className: clsx(text({ variant, bold, color }), className), ...props },
    children
  );
};

export default Text;
