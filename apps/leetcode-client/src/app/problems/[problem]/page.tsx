"use client";
import CodeEditor from "@/components/CodeEditor/CodeEditor";
import EditorNav from "@/components/CodeEditor/EditorNav";
import Description from "@/components/ques-description/Description";
import { CircleCheckBig } from "lucide-react";
import React, { useState } from "react";

const page = () => {
  const [language, setLanguage] = useState({
    label: "JavaScript",
    value: "javascript",
    id: 63,
    name: "JavaScript",
  });
  const [theme, setTheme] = useState("vs-dark");

  return (
    <div className="h-[100vh] w-[100vw] box-border p-2">
      <div className="grid grid-cols-10 gap-x-2 h-full">
        <Description />
        <div className="col-span-6 border border-gray-600 h-full rounded bg-[#212020]">
          <EditorNav
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            setTheme={setTheme}
          />
          <CodeEditor theme={theme} language={language.value} />
        </div>
      </div>
    </div>
  );
};

export default page;
