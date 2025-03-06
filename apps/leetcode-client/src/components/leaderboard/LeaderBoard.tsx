import axios from "axios";
import Link from "next/link";
import React from "react";

const LeaderBoard = async () => {
 
  const response = await fetch(`${process.env.DATABASE_URL}/user/bulk`);
  const json = await response.json();
  const users = json.data.user;

  return (
    <div className="mx-auto w-full px-8">
      <div className="grid grid-cols-4 pb-4 border-b border-gray-700 px-4 w-full text-gray-200 uppercase text-sm leading-normal">
        <span className="text-left font-semibold">Ranking</span>
        <span className="text-left font-semibold">Username</span>
        <span className="text-left font-semibold">email</span>
        <span className="text-left font-semibold">Solved</span>
      </div>
      <div className="text-gray-400 text-sm">
        {users.map((user: any, index: number) => {
          return (
            <Link key={user.id} href={"/problems/2333"}>
              <div className="grid grid-cols-4 px-4 w-full text-gray-400 text-sm font-normal hover:bg-hover_global transition-all duration-300">
                <div className="flex py-2 items-center">
                  <span className="text-left font-semibold">{user.rank}</span>
                </div>
                <div className="flex py-2 items-center">
                  <span className="text-left font-semibold">{user.name}</span>
                </div>
                <div className="flex py-2 items-center">
                  <span className="text-left font-semibold">{user.email}</span>
                </div>
                <div className="flex py-2 items-center">
                  <span className="text-left font-semibold">{user.no_of_solved_questions}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderBoard;
