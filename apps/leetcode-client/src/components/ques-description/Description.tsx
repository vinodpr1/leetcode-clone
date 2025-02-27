import { CircleCheckBig } from "lucide-react";
import React from "react";

const Description = () => {
  return (
    <div className="col-span-4 border border-gray-600 h-full overflow-hidden rounded bg-[#212020]">
      <div className="sticky top-0 left-0 px-4 rounded-t py-1 text-sm font-semibold bg-[rgb(49,48,48)]">
        <h1>Description</h1>
      </div>
      <div className="px-4">
        <div className="py-4 flex justify-between">
          <h3 className="text-xl font-bold">1- Title of Question</h3>
          <div className="flex items-center gap-1">
            <span className="text-gray-400 text-sm">Solved</span>
            <CircleCheckBig className="h-4 w-4 text-green-500" />
          </div>
        </div>
        <button className="px-2 flex justify-center items-center bg-gray-700 rounded-full">
          <span className="text-green-400 text-sm font-thin">Tag Name</span>
        </button>
        <p className="py-4 text-sm text-gray-100">
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target. You may assume
          that each input would have exactly one solution, and you may not use
          the same element twice. You can return the answer in any order. Given
          an array of integers nums and an integer target, return indices of the
          two numbers such that they add up to target. You may assume that each
          input would have exactly one solution, and you may not use the same
          element twice. You can return the answer in any order. Given an array
          of integers nums and an integer target, return indices of the two
          numbers such that they add up to target.
        </p>
      </div>
    </div>
  );
};

export default Description;
