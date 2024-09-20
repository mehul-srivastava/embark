"use client";
import { useLayoutEffect } from "react";
import hljs from "highlight.js";
import rust from "highlight.js/lib/languages/rust";
import { useRecoilValue } from "recoil";
import { codeAtom } from "@/store/atoms";
import "highlight.js/styles/tokyo-night-dark.css";

const Code = () => {
  useLayoutEffect(() => hljs.highlightAll());
  hljs.registerLanguage("rust", rust);

  const code = useRecoilValue(codeAtom);
  return code;
};

export default Code;
