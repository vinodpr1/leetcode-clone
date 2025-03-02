import { CircleCheckBig } from "lucide-react";
import React from "react";

const Description = () => {
  return (
    <div className="h-full">
     <div className="rounded h-full text-sm">
       <div className="px-4 rounded-t py-1 text-sm bg-[rgb(49,48,48)]">
        <h1 className="font-normal">Description</h1>
       </div>
     
       <div className="px-4 lang overflow-auto bg-[#212020] h-[94%] ">
        <div className="py-4 flex justify-between">
          <h3 className="text-xl font-bold">1- Title of Question</h3>
          <div className="flex items-center gap-1">
            <span className="text-gray-400 text-sm">Solved</span>
            <CircleCheckBig className="h-4 w-4 text-green-500" />
          </div>
        </div>
        <button className="px-2 flex justify-center items-center bg-[rgb(49,48,48)] rounded-full">
          <span className="text-green-400 text-sm font-thin">Tag Name</span>
        </button>
        <p className="text-sm text-gray-100">
          consectetur reprehenderit nisi tempore id? Eos iusto a ducimus commodi
          dolores. In, repellendus odio nulla minima magni architecto repellat
          incidunt voluptate id numquam iste eligendi eaque adipisci placeat
          asperiores necessitatibus consectetur reiciendis explicabo hic
          voluptatum nisi, corrupti modi. Similique, exercitationem quasi?
        </p>
       </div>

     </div>
    </div>
  );
};

export default Description;
