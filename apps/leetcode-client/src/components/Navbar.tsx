import { Github, LogOut, UserCheck } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import NavResizer from "./NavResizer";
import { useEffect, useState } from "react";
import { fetchUser } from "@/api/userServices";

const Navbar = async() => {

  const cookieStore = await cookies();
  const authToken = cookieStore.get('authToken')?.value;

  const data =await fetchUser(authToken);
  const user = data?.data?.user;


  return (
    <nav className="flex items-center mx-auto max-w-6xl w-full">
      <div className="flex w-full  py-2 justify-between">
        <div className="flex items-center gap-x-[90px]">
          <div className="text-xl font-bold bg-gradient-to-tr from-[#2affec] to-green-700 bg-clip-text text-transparent">
            <Link href={"/"}>LeetHub</Link>
          </div>
          <div className="hidden md:flex">
            <ul className="flex text-sm items-center gap-x-6">
              <li className="text-white hover:text-[#25f5ae]">
                <Link href={"/leaderboard"}>Leader Board</Link>
              </li>
              <li className="text-white hover:text-[#25f5ae]">
                <Link href={"/questions"}>Problems</Link>
              </li>
              <li className="text-white hover:text-[#25f5ae]">
                <Link href={"/ide"}>Online IDE</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          {
            user?
            <div className="flex items-center gap-4">
              <form action="/api/logout" method="POST">
               <button
                  type="submit"
                  className="flex items-center justify-center bg-global_bg p-2 hover:bg-hover_global rounded-full transition-all duration-300"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </form>
              <Link href={"/profile"}>
                <button  className="flex items-center justify-center bg-global_bg p-2 hover:bg-hover_global rounded-full transition-all duration-300">
                  <UserCheck className="h-4 w-4"/>
                </button>
             </Link>
            </div>
            :
            <div className="hidden md:flex items-center gap-x-6 ">
            <Link
              target="blank"
              href="https://github.com/vinodpr1"
              className="flex items-center gap-x-1 text-sm "
            >
              <Github className="h-5 w-5 mr-1" />
            </Link>
            <Link href="/signin" className="text-sm">
              Log in
            </Link>
            <Link href="/signup" className="text-sm ">
              <button className="flex px-2 py-1 bg-[#00e599] rounded-full text-black">
                Sign up
              </button>
            </Link>
            </div>
          }
          <NavResizer/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
