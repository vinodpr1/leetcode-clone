"use client";
import CodeEditor from "@/components/CodeEditor/CodeEditor";
import EditorNav from "@/components/CodeEditor/EditorNav";
import Description from "@/components/ques-description/Description";
import { CircleCheckBig } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getBoilerCode } from "@/constants/boilercode";
import { useRecoilState } from "recoil";
import { chooseLanguageToggle, chooseThemeToggle } from "@/store/toggle";

const page = () => {
  const [language, setLanguage] = useState({
    label: "JavaScript",
    value: "javascript",
    id: 63,
    name: "JavaScript",
  });
  const [theme, setTheme] = useState("vs-dark");
  const [code, setCode] = useState(getBoilerCode(language.id));

  useEffect(() => {
    setCode(getBoilerCode(language.id));
  }, [language]);

  const [chooseLanguage, setChooseLanguage] =
    useRecoilState(chooseLanguageToggle);
  const [chooseTheme, setChooseTheme] = useRecoilState(chooseThemeToggle);

  const handlePropagation = () => {
    setChooseLanguage(false);
    setChooseTheme(false);
  };

  return (
    <div
      onClick={handlePropagation}
      className="h-[100vh] w-[100vw] box-border p-2"
    >
      <div className="grid grid-cols-10 gap-x-2 h-full">
        <Description />
        <div className="col-span-6 border border-gray-600 h-full rounded bg-[#212020]">
          <EditorNav
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            setTheme={setTheme}
          />
          <CodeEditor theme={theme} language={language} code={code} />
        </div>
      </div>
    </div>
  );
};

export default page;
