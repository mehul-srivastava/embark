import React from "react";
import Code from "./Code";

const Editor = () => {
  return (
    <div>
      <div className="flex items-center gap-x-4">
        <h4 className="text-white rounded-full bg-gray-800 w-fit p-2 px-8 mb-4 cursor-pointer">
          Rust <small>(Anchor)</small>
        </h4>
      </div>
      <div className="bg-[#1c1b1b] h-full border border-gray-500 rounded-md max-w-[calc(100vw-450px-48px)]">
        <pre className="h-[calc(100vh-56px-24px-24px)] w-full">
          <code className="rounded-md h-full">
            <Code />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Editor;
