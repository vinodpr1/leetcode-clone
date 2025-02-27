import { ChevronDown, CodeXml } from "lucide-react";
import React, { useEffect, useState } from "react";
import LanguageDropdown from "../dropdowns/LanguageDropdown";
import ThemeDropdown from "../dropdowns/ThemeDropdown";
import { chooseLanguageToggle, chooseThemeToggle } from "@/store/toggle";
import { useRecoilState } from "recoil";


const EditorNav = ({
  language,
  setLanguage,
  theme,
  setTheme
}: {
  language: any;
  setLanguage: any;
  theme: any;
  setTheme: any;
}) => {
 

  
  const [chooseLanguage, setChooseLanguage] = useRecoilState(chooseLanguageToggle);
  const [chooseTheme, setChooseTheme] = useRecoilState(chooseThemeToggle);


  useEffect(() => {
    setChooseLanguage(false);
    setChooseTheme(false);
  }, [language, theme]);


  const handleThemeDropdown = (e:any) => {
    e.stopPropagation();
    setChooseTheme((prev:any) => !prev);
    setChooseLanguage(false);
  };

  const handleLanguageDropdown = (e:any) => {
    e.stopPropagation();
    setChooseLanguage((prev:any) => !prev);
    setChooseTheme(false);
  };

  const handlePropagation=()=>{
    setChooseLanguage(false); 
    setChooseTheme(false);
  }

  return (
    <div>
      <div onClick={handlePropagation} className="px-4 rounded-t py-1 text-sm font-semibold bg-[rgb(49,48,48)]">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <CodeXml className="h-4 w-4 text-green-500" />
            <span className="text-gray-400 text-sm">Code</span>
          </div>

          <div className="relative">
            <button
              onClick={handleLanguageDropdown}
              className="flex px-2 items-center gap-1 bg-[rgb(70,69,69)] hover:bg-[rgb(58,57,57)] rounded transition-all duration-500"
            >
              <ChevronDown className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400 text-sm font-normal">
                {language.name}
              </span>
            </button>
            {chooseLanguage && (
              <LanguageDropdown  language={language} setLanguage={setLanguage} />
            )}
          </div>

          <div className="relative">
            <button
              onClick={handleThemeDropdown}
              className="flex px-2 items-center gap-1 bg-[rgb(70,69,69)] hover:bg-[rgb(58,57,57)] rounded transition-all duration-500"
            >
              <ChevronDown className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400 text-sm font-normal">{theme}</span>
            </button>
            {chooseTheme && <ThemeDropdown theme={theme} setTheme={setTheme} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorNav;
