import axios from "axios";
import { CircleCheckBig } from "lucide-react";

const Description = ({ques}:{ques:any}) => {

  console.log("Que sin description", ques)

  return (
    <div className="h-full">
      <div className="rounded h-full text-sm">
        <div className="px-4 rounded-t py-1 text-sm bg-[rgb(49,48,48)]">
          <h1 className="font-normal">Description</h1>
        </div>

        <div className="px-4 lang overflow-auto bg-[#212020] h-[94%] ">
          <div className="py-4 flex justify-between">
            <h3 className="text-xl font-bold">{ques?.id} - {ques?.title}</h3>
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-sm">Solved</span>
              <CircleCheckBig className="h-4 w-4 text-green-500" />
            </div>
          </div>
          <div className="px-2 w-fit flex  items-center bg-[rgb(81,79,79)] rounded-full">
            <div className="flex items-center text-green-400 text-sm font-thin">{ques?.difficulty}</div>
          </div>
          <p className="text-sm text-gray-100 pt-4">
            {ques?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
