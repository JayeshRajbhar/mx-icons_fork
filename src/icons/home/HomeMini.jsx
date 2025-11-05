import React from "react";
import Icon from "../Icon";

export default function HomeMini({
  size = 16,
  color = "#111",
  strokeWidth = 1.25,
  ...props
}) {
  return (
    <Icon size={size} color={color} strokeWidth={strokeWidth} {...props}>
      <path d="M2 8.5L8 4l6 4.5" />
      <path d="M4 9v4a1 1 0 0 0 1 1h2v-3h2v3h2a1 1 0 0 0 1-1V9" />
    </Icon>
  );
}
