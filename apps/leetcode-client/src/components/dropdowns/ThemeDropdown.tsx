import React, { useEffect } from "react";
import { LANGUAGES } from "@/constants/language";
import "../../app/globals.css";
import { Check } from "lucide-react";

const ThemeDropdown = ({ theme, setTheme }: { theme: any; setTheme: any }) => {
  const handleLanguageChange = (theme: any) => {
    setTheme(theme);
  };

  return (
    <div
      className={`absolute z-50 top-[30px] w-[200px] h-auto max-h-[400px] overflow-auto left-0 bg-global_bg rounded transition-all duration-300 ease-in-out`}
    >
      <div className="w-full h-full">
        <div className="p-4 gap-4 text-sm font-light">
          {["vs-dark", "hc-black", "light"].map((tm) => {
            return (
              <div
                key={tm}
                onClick={() => handleLanguageChange(tm)}
                className={`px-4 py-2 my-1 hover:bg-hover_global cursor-pointer rounded ${theme == tm && "bg-hover_global"}`}
                aria-selected={theme.name === tm}
              >
                <span className="flex items-center gap-2">
                  {tm}
                  {theme == tm && <Check className="h-4 w-4 text-green-500" />}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThemeDropdown;
