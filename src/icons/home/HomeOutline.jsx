import React from "react";
import Icon from "../Icon";

export default function HomeOutline({ size, color, strokeWidth, ...props }) {
  return (
    <Icon size={size} color={color} strokeWidth={strokeWidth} {...props}>
      <path d="M3 11.5L12 4l9 7.5" />
      <path d="M5 12v7a1 1 0 0 0 1 1h3v-5h6v5h3a1 1 0 0 0 1-1v-7" />
    </Icon>
  );
}
