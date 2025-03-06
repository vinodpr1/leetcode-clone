import axios from "axios";
import { CircleCheckBig, FileCode } from "lucide-react";
import Link from "next/link";

const Questions = async () => {

  const response = await fetch(`${process.env.DATABASE_URL}/questions`);
  const json = await response.json();
  const questions = json.res.questions;

  return (
    <div className="mx-auto w-full">
      <div className=" w-full flex justify-between">
        <div className="grid grid-cols-4 w-full text-gray-200 uppercase text-sm leading-normal border-b border-gray-700">
          <span className="py-3 px-6 text-left font-semibold">Status</span>
          <span className="py-3 px-6 text-left font-semibold">Description</span>
          <span className="py-3 px-6 text-left font-semibold">Solution</span>
          <span className="py-3 px-6 text-left font-semibold">Difficulty</span>
        </div>
      </div>
      <div className="text-gray-400 text-sm">
        {questions.map((data: any, index: number) => {
          return (
            <Link key={index} href={"/problems/2333"}>
              <div className="grid grid-cols-4 hover:bg-hover_global transition-all duration-300">
                <span className="py-3 px-6">
                  <CircleCheckBig className="h-4 w-4 text-green-500" />
                </span>
                <span className="py-3 px-6">
                  <span>Merge Two 2D Arrays by Summing</span>
                </span>
                <span className="py-3 px-6">
                  <FileCode className="h-4 w-4 text-green-500" />
                </span>
                <span className="py-3 px-6">
                  <span>Easy</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
