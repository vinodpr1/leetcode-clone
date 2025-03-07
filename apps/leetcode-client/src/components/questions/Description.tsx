import axios from "axios";
import { CircleCheckBig } from "lucide-react";
import React from "react";

const Description = ({ ques }: { ques: any }) => {
  return (
    <div className="h-full">
      <div className="rounded h-full text-sm">
        <div className="px-4 rounded-t py-1 text-sm bg-[rgb(49,48,48)]">
          <h1 className="font-normal">Description</h1>
        </div>

        <div className="px-4 lang overflow-auto bg-[#212020] h-[94%] ">
          <div className="py-4 flex justify-between">
            <h3 className="text-xl font-bold">
              {ques?.id}• {ques?.title}
            </h3>
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-sm">Solved</span>
              <CircleCheckBig className="h-4 w-4 text-green-500" />
            </div>
          </div>
          <div className="px-2 w-fit flex  items-center bg-[rgb(81,79,79)] rounded-full">
            <div className="flex items-center text-green-400 text-sm font-thin">
              {ques?.difficulty}
            </div>
          </div>
          <p className="text-sm text-gray-300 pt-4">{ques?.description}</p>
          <div className="mt-6">
            <div className="flex flex-col gap-3 text-gray-300">
              {ques?.examples?.map((example: string, index: number) => {
                return (
                  <div key={index} className="">
                    <h3 className="font-semibold pb-1">
                      Example: {index + 1}{" "}
                    </h3>
                    <div className="flex flex-col pl-4">
                      <div className="flex gap-4">
                        {Object.entries(example?.input).map((val, index) => {
                          return (
                            <p key={index}>
                              <span className="text-white font-semibold">
                                Input:{" "}
                              </span>{" "}
                              {val[0]} = {JSON.stringify(val[1])}{" "}
                            </p>
                          );
                        })}
                      </div>
                      <p className="">
                        <span className="text-white font-semibold">
                          Output:{" "}
                        </span>{" "}
                        {JSON.stringify(example?.output)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold py-2">Constraints :</h3>
            <div className="flex flex-col gap-2">
              {ques?.constraints?.map((constraint: string, index: number) => {
                return (
                  <span key={index} className="">
                    {constraint}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
