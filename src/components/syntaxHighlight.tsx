"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Prop = {
  children: string;
};
function SyntaxHighlight({ children }: Prop) {
  const lines = children.split("\n");
  const language = lines[0];
  const remainingLines = lines.slice(1).join("\n");
  return (
    <SyntaxHighlighter language={language} style={oneDark}>
      {remainingLines}
    </SyntaxHighlighter>
  );
}

export default SyntaxHighlight;
