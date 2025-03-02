"use client";
import CodeEditor from "@/components/CodeEditor/CodeEditor";
import Description from "@/components/ques-description/Description";
import { ChevronDown, SquareCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getBoilerCode } from "@/constants/boilercode";
import { useRecoilState } from "recoil";
import {
  chooseLanguageToggle,
  chooseThemeToggle,
  activeOutputModal,
  submissionResponse
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
  
  const [submissionRes, setSubmissionRes] = useRecoilState(submissionResponse);

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

 
  useEffect(()=>{
      console.log("AAAA gayaaa", submissionRes);
  },[submissionRes])


  return (
    <div onClick={handlePropagation} className="h-screen p-2">
        <div className="w-full flex flex-col md:flex  md:flex-row  gap-2 rounded  h-full">
           <div className={`border border-gray-500 md:w-[60%] w-full rounded h-full}`}>
            <CodeEditor
              openIde={true}
              theme={theme}
              setTheme={setTheme}
              language={language}
              setLanguage={setLanguage}
              code={code}
              setCode={setCode}
            />
           </div>
           <div className="rounded md:w-[40%] w-full min-h-[200px] h-full lang row-span-5 bg-[#212020] z-50 border border-gray-500">
              <div className="sticky rounded flex justify-between top-0 left-0 px-4 text-sm bg-[#292828]">
                <div className="flex items-center justify-center gap-1">
                  <SquareCheck
                     size={28}
                     strokeWidth={1.2}
                     className="h-5 w-5 text-green-500" 
                  />
                  <span className="text-white text-sm">Output</span>
                </div>

                <button
                  onClick={() => setIsOutputModal((prev: boolean) => !prev)}
                  className="flex items-center gap-1"
                >
                  <ChevronDown
                    size={28}
                    strokeWidth={1}
                    className=" text-white"
                  />
                </button>
              </div>
              <div className="text-white px-8 py-0 h-auto">
                 {
                  submissionRes?
                   <span className="text-xs text-green-500">
                     {submissionRes}
                   </span>
                  : 
                   <span className="text-xs text-green-500">
                     Running
                  </span>
                 }
          </div>           
           </div>
        </div>
    </div>
  );
};

export default page;
