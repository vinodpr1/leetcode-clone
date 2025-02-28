import { ChevronDown, CodeXml, Play } from "lucide-react";
import React, { useEffect, useState } from "react";
import LanguageDropdown from "../dropdowns/LanguageDropdown";
import ThemeDropdown from "../dropdowns/ThemeDropdown";
import {
  activeOutputModal,
  chooseLanguageToggle,
  chooseThemeToggle,
} from "@/store/toggle";
import { useRecoilState } from "recoil";

import axios from "axios";

const EditorNav = ({
  language,
  setLanguage,
  theme,
  setTheme,
  code,
}: {
  language: any;
  setLanguage: any;
  theme: any;
  setTheme: any;
  code: any;
}) => {
  const [chooseLanguage, setChooseLanguage] =
    useRecoilState(chooseLanguageToggle);
  const [chooseTheme, setChooseTheme] = useRecoilState(chooseThemeToggle);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setChooseLanguage(false);
    setChooseTheme(false);
  }, [language, theme]);

  const handleThemeDropdown = (e: any) => {
    e.stopPropagation();
    setChooseTheme((prev: any) => !prev);
    setChooseLanguage(false);
  };

  const handleLanguageDropdown = (e: any) => {
    e.stopPropagation();
    setChooseLanguage((prev: any) => !prev);
    setChooseTheme(false);
  };

  const handlePropagation = () => {
    setChooseLanguage(false);
    setChooseTheme(false);
  };

  console.log(language.id);
  const handleCodeSubmit = async () => {
    console.log("Code is Here#3", language, code);

    setIsOutputModal(true);

    // const options = {
    //   method: "POST",
    //   url: "https://judge0-ce.p.rapidapi.com/submissions",
    //   headers: {
    //     "X-RapidAPI-Key": "7390387347msh4e9b26fba6f8f48p196b5cjsn78afec8b833a", // Replace with your API key
    //     "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    //     "Content-Type": "application/json",
    //   },
    //   data: {
    //     source_code: code,
    //     language_id: language.id,
    //   },
    // };

    // const response = await axios.post("https://judge0-ce.p.rapidapi.com/submissions",
    // {
    //   source_code: code,
    //   language_id: language.id,
    // },
    // {
    //   headers:
    //   {
    //     "X-RapidAPI-Key": "6335ed9944msh26ba14106bc0094p10bc52jsn01752b42645c",
    //     "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    //     "Content-Type": "application/json"
    // }});
    // console.log("Response", response.data.token);

    //   setToken(response.data.token);

    //   const response2 = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${token}`,
    //   {
    //     headers:
    //     {
    //       "X-RapidAPI-Key": "6335ed9944msh26ba14106bc0094p10bc52jsn01752b42645c",
    //       "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    //       "Content-Type": "application/json"
    //    }}
    //  );
    //   console.log(response2.data);

    // axios
    //   .request(options)
    //   .then((response) => {
    //     console.log("REsponse +v1", response.data);
    //     const options = {
    //       method: "GET",
    //       url: `https://judge0-ce.p.rapidapi.com/submissions/${response.data.token}`,
    //       headers: {
    //         "X-RapidAPI-Key": "7390387347msh4e9b26fba6f8f48p196b5cjsn78afec8b833a", // Replace with your actual API key
    //         "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
    //       }
    //     };

    //     axios
    //      .request(options)
    //      .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Response -ve of code", error);
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Response -ve", error);
    //   });
  };

  const [isOutputModal, setIsOutputModal] = useRecoilState(activeOutputModal);

  return (
    <div
      onClick={handlePropagation}
      className="px-4 py-1 text-sm font-semibold bg-[rgb(49,48,48)]"
    >
      <div className="flex justify-between">
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
              <LanguageDropdown language={language} setLanguage={setLanguage} />
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
        <div className="pr-4">
          <button
            onClick={handleCodeSubmit}
            className="flex px-1 rounded items-center text-sm text-green-500 font-normal bg-[rgb(70,69,69)] hover:bg-[rgb(58,57,57)]"
          >
            <Play strokeWidth={1} className="h-4 w-4 " />
            <span>Run</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorNav;
