import { ChevronRight } from "lucide-react";
import React from "react";

const Consistency = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">116</h3>
          <span className="text-gray-400">
            submissions in the past one year
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">
            Total active days: <span className="text-white">24</span>
          </span>
          <span className="text-gray-400 text-sm">
            Max streak: <span className="text-white">5</span>
          </span>
          <button className="bg-gray-700 px-3 py-1 rounded text-sm flex items-center gap-1">
            Current <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: "repeat(53, minmax(0, 1fr))" }}
        >
          {Array.from({ length: 53 }).map((_, index) => {
            return (
              <div key={index} className="grid gap-1 grid-rows-7">
                {Array.from({ length: 7 }).map((_, key) => {
                  return (
                    <div
                      key={key}
                      className="h-3 w-3 bg-gray-400 rounded-sm"
                    ></div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
          <span>Jan</span>
          <span>Feb</span>
        </div>
      </div>
    </div>
  );
};

export default Consistency;
