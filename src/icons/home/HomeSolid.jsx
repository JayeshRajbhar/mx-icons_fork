import React from "react";
import Icon from "../Icon";

export default function HomeSolid({
  size = 24,
  color = "#111",
  strokeWidth,
  ...props
}) {
  // For solid variants we set fill via props to let the Icon wrapper accept it
  return (
    <Icon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      fill={color}
      {...props}
    >
      <path d="M12 3l10 8v7a1 1 0 0 1-1 1h-5v-5H8v5H3a1 1 0 0 1-1-1v-7l10-8z" />
    </Icon>
  );
}
