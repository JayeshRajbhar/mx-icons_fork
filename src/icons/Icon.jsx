import React from "react";

export default function Icon({
  children,
  size = 24,
  color = "#111",
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={props["aria-hidden"] ?? true}
      {...props}
    >
      {children}
    </svg>
  );
}
