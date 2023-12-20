import React from "react";

export default function Card({ type, size, className, children }) {
  const classes = [
    className,
    "card",
    `card_${type || "horizontal"}_${size || "normal"}`,
  ];

  return <div className={classes.join(" ")}>{children}</div>;
}
