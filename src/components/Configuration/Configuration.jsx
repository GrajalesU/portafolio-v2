import React from "react";
import Theme from "../Theme/Theme";
import Language from "../Language/Language";

export default function Configuration() {
  return (
    <div className="absolute flex flex-row-reverse md:w-8 md:flex-col gap-4 top-4 right-4 z-30 md:fixed md:right-[0.95rem] md:bottom-[12%]">
      <Theme />
      <Language />
    </div>
  );
}
