"use client";
import CodeEditor from "@/components/CodeEditor/CodeEditor";
import EditorNav from "@/components/CodeEditor/EditorNav";
import Description from "@/components/ques-description/Description";
import { ChevronDown, CircleCheckBig, SquareCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getBoilerCode } from "@/constants/boilercode";
import { useRecoilState } from "recoil";
import {
  chooseLanguageToggle,
  chooseThemeToggle,
  activeOutputModal,
} from "@/store/toggle";

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
  const [isOutputModal, setIsOutputModal] = useRecoilState(activeOutputModal);

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
        <div className="relative col-span-6 h-full rounded border border-gray-600">
          <div className="grid grid-flow-row grid-rows-21">
            <div className="row-span-1  bg-white ">
              <EditorNav
                language={language}
                setLanguage={setLanguage}
                theme={theme}
                setTheme={setTheme}
                code={code}
              />
            </div>
            <div className="row-span-10 ">
              <CodeEditor theme={theme} language={language} code={code} />
            </div>
            <div className="row-span-10">
              {isOutputModal && (
                <div className="lang row-span-5 absolute bottom-0 h-[200px] overflow-auto w-full bg-[#212020] z-50 border border-gray-600">
                  <div className="sticky rounded-t flex justify-between top-0 left-0 px-4 text-sm bg-[#292828]">
                    <div className="flex items-center gap-1">
                      <SquareCheck className="h-5 w-5 text-green-500" />
                      <span className="text-white text-sm">Code</span>
                    </div>

                    <button
                      onClick={() => setIsOutputModal((prev: boolean) => !prev)}
                      className="flex items-center gap-1"
                    >
                      <ChevronDown
                        size={28}
                        strokeWidth={1.25}
                        className=" text-white"
                      />
                    </button>
                  </div>
                  <span className="text-white">
                    officiis quam dolores laborum sequi consequuntur quas?
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// <div className="row-span-1 border-2 border-pink-500">
// <EditorNav
//   language={language}
//   setLanguage={setLanguage}
//   theme={theme}
//   setTheme={setTheme}
//   code={code}
// />
// </div>
// <div className={`row-span-5`}>
//  <CodeEditor theme={theme} language={language} code={code} />
// </div>
// {/*
// {/* )} */}

// const OutputModal=(setIsOutputModal:any)=>{
//   return(

//   )
// }
