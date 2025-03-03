"use client";
import { Github, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menubar, setMenuBar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuBar(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="z-50 backdrop-blur-2xl fixed px-8 py-2 top-0 left-0 flex items-center border-b border-gray-600 max-w-7xl mx-auto w-full">
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
          <div className="hidden md:flex items-center gap-x-6">
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
          <div className="flex md:hidden">
            {menubar ? (
              <button onClick={() => setMenuBar((prev) => !prev)}>
                <X />
              </button>
            ) : (
              <button onClick={() => setMenuBar((prev) => !prev)}>
                <Menu />
              </button>
            )}
          </div>

          {menubar && (
            <div
              className={`absolute top-12 right-0 w-full  bg-black transition-all duration-300 ease-in-out ${
                menubar
                  ? "h-[100vh] opacity-100"
                  : "h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="px-8 py-4">
                <ul className="flex flex-col text-sm gap-y-6">
                  <li className="">
                    <Link href={"/leaderboard"}>Leader Board</Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href={"/questions"}>Problems</Link>
                  </li>
                  <li className="text-white hover:text-[#25f5ae]">
                    <Link href={"/ide"}>Online IDE</Link>
                  </li>
                </ul>
                <div className="flex gap-4 mt-4 items-center justify-between">
                  <div className="w-1/3">
                    <Link href={"/signin"}>
                      <button className="w-full flex justify-center items-center px-2 py-1 bg-[#212121] border border-gray-500 rounded-full text-white">
                        Sign in
                      </button>
                    </Link>
                  </div>
                  <div className="w-1/3">
                    <Link href={"/signup"}>
                      <button className="w-full flex justify-center items-center px-2 py-1 bg-[#00e599] border border-gray-500 rounded-full text-black">
                        Sign up
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="flex w-full justify-center gap-4 mt-4">
                  <Link
                    target="blank"
                    href="https://github.com/codervinod123"
                    className="flex items-center gap-x-1 text-sm "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 36 36"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M18 .45c-9.9 0-18 8.1-18 18 0 7.988 5.175 14.738 12.263 17.1.9.113 1.237-.337 1.237-.9v-3.037c-5.062 1.125-6.075-2.363-6.075-2.363-.787-2.025-2.025-2.587-2.025-2.587-1.688-1.125.112-1.125.112-1.125 1.8.112 2.813 1.8 2.813 1.8 1.575 2.7 4.163 1.912 5.288 1.462a3.9 3.9 0 0 1 1.125-2.362c-4.05-.45-8.213-2.025-8.213-8.888 0-1.912.675-3.6 1.8-4.837-.225-.45-.787-2.25.225-4.725 0 0 1.462-.45 4.95 1.8 1.463-.45 2.925-.563 4.5-.563s3.038.225 4.5.563c3.488-2.363 4.95-1.913 4.95-1.913 1.012 2.475.338 4.275.225 4.725 1.125 1.238 1.8 2.813 1.8 4.838 0 6.862-4.163 8.437-8.213 8.887.675.563 1.238 1.688 1.238 3.375v4.95c0 .45.337 1.013 1.238.9C30.825 33.188 36 26.438 36 18.45c0-9.9-8.1-18-18-18"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
