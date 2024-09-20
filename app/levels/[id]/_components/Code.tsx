"use client";
import hljs from "highlight.js/lib/core";
import rust from "highlight.js/lib/languages/rust";
import { useRecoilValue } from "recoil";
import { codeAtom } from "@/store/atoms";
import "highlight.js/styles/tokyo-night-dark.css";

const Code = () => {
  hljs.registerLanguage("rust", rust);
  const code = hljs
    .highlight(useRecoilValue(codeAtom), { language: "rust" })
    ._emitter.toHTML();

  return (
    <div
      className="rounded-md h-full text-gray-200"
      dangerouslySetInnerHTML={{ __html: code }}
    ></div>
  );
};

export default Code;
