"use client";
import CodeEditor from "@/components/CodeEditor/CodeEditor";
import Description from "@/components/questions/Description";
import { ChevronDown, SquareCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { getBoilerCode } from "@/constants/boilercode";
import { useRecoilState } from "recoil";
import {
  chooseLanguageToggle,
  chooseThemeToggle,
  activeOutputModal,
  submissionResponse,
} from "@/store/toggle";

const Problem = ({
  questionID,
  authTOken,
}: {
  questionID: any;
  authTOken: any;
}) => {
  const [language, setLanguage] = useState({
    label: "JavaScript",
    value: "javascript",
    id: 63,
    name: "JavaScript",
  });
  const [theme, setTheme] = useState("vs-dark");
  const [code, setCode] = useState(getBoilerCode(language.id));
  const [ques, setQues] = useState(null);

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

  useEffect(() => {
    console.log("AAAA gayaaa", submissionRes);
  }, [submissionRes]);

  useEffect(() => {
    getQuestionDetails();
  }, []);

  const getQuestionDetails = async () => {
    const response = await fetch(
      `http://localhost:3100/api/v1/questions?id=${questionID}`,
    );
    const question = await response.json();
    setQues(question.res[0]);
  };

  return (
    <div onClick={handlePropagation} className="h-screen p-2 overflow-hidden">
      <div className="flex flex-col md:flex  md:flex-row gap-2 w-full h-full rounded">
        <div className="border border-gray-500 md:w-[40%] rounded w-full  h-full">
          <Description ques={ques} />
        </div>

        <div className="w-full md:w-[60%] flex flex-col gap-2 rounded  h-full">
          <div
            className={`border border-gray-500 rounded ${isOutputModal ? "h-[70%]" : "h-full"}`}
          >
            <CodeEditor
              theme={theme}
              setTheme={setTheme}
              language={language}
              setLanguage={setLanguage}
              code={code}
              setCode={setCode}
              authTOken={authTOken}
            />
          </div>
          {isOutputModal && (
            <div className="border border-gray-500  rounded h-[30%] lang row-span-5 w-full bg-[#212020] z-50">
              <div className="sticky rounded flex justify-between top-0 left-0 px-4 text-sm bg-[#292828]">
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
              <div className="text-white px-8 py-4">
                <h3>Output.....</h3>
                {submissionRes ? (
                  <span className="text-xs text-green-500">
                    {submissionRes}
                  </span>
                ) : (
                  <span className="text-xs text-green-500">Running</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Problem;
