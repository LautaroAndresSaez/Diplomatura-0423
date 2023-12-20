import React from "react";

export default function ExampleSection({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="example">{children}</div>
    </div>
  );
}
