import React from "react";
import axios from "axios";
import Link from "next/link";
import { CircleCheckBig, FileCode } from "lucide-react";

const LeaderBoard = async () => {


  return (
    <div className="mx-auto w-full px-8">
      <div className="grid grid-cols-3 px-4 w-full text-gray-200 uppercase text-sm leading-normal">
        <span className="text-left font-semibold">Ranking</span>
        <span className="text-left font-semibold">Username</span>
        <span className="text-left font-semibold">email</span>
      </div>
      <div className="text-gray-400 text-sm">
        {/* {users.map((user: any, index: number) => {
          return (
            <Link key={user.id} href={"/problems/2333"}>
              <div className="grid grid-cols-3 px-4 w-full text-gray-500 text-sm font-normal hover:bg-hover_global transition-all duration-300">
                <div className="flex py-2 items-center">
                  <span className="text-left font-semibold">{user.id}</span>
                </div>
                <div className="flex py-2 items-center">
                  <span className="text-left font-semibold">{user.name}</span>
                </div>
                <div className="flex py-2 items-center">
                  <span className="text-left font-semibold">{user.email}</span>
                </div>
              </div>
            </Link>
          );
        })} */}
      </div>
    </div>
  );
};

export default LeaderBoard;
