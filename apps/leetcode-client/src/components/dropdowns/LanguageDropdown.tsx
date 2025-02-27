import React from "react";
import { LANGUAGES } from "@/constants/language";
import "../../app/globals.css";
import { Check } from "lucide-react";

const LanguageDropdown = ({
  language,
  setLanguage,
}: {
  language: any;
  setLanguage: any;
}) => {
  const handleLanguageChange = (lang: any) => {
    setLanguage(lang);
  };

  return (
    <div
      className={`absolute z-50 top-[30px] w-[200px] h-auto max-h-[400px] overflow-auto left-0 bg-global_bg rounded transition-all duration-300 ease-in-out`}
    >
      <div className="w-full h-full">
        <ul className="p-4 gap-4 text-sm font-light">
          {LANGUAGES.map((lang) => {
            return (
              <li
                key={lang.id}
                onClick={() => handleLanguageChange(lang)}
                className={`px-4 py-2 hover:bg-hover_global cursor-pointer rounded ${language.name == lang.name && "bg-hover_global"}`}
                aria-selected={language.name === lang.name}
              >
                <span className="flex items-center gap-2">
                  {lang.name}
                  {language.name == lang.name && (
                    <Check className="h-4 w-4 text-green-500" />
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LanguageDropdown;
