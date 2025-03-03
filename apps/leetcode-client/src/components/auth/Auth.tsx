import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import "../../app/globals.css";
import AuthForm from "./AuthForm";

interface IAuth {
  component: string;
  loginHeading: string;
  authWithEmailText: string;
  userAuthOption: string;
  userAuthAction: string;
}

const Auth = ({
  component,
  loginHeading,
  authWithEmailText,
  userAuthOption,
  userAuthAction,
}: IAuth) => {
  // const [response, setResponse] = useFormState(signInAction,{ success: true, message: ""});

  return (
    <div className="h-[100vh] w-[100vw] overflow-x-hidden">
      <div className="h-full w-full flex flex-col lg:grid lg:grid-cols-10">
        <div className="bg-[#131313] flex flex-col py-12 px-2 col-span-4 justify-center">
          <div className="">
            <p className="text-2xl font-medium sm:text-3xl sm:font-semibold">
              <span className="text-3xl font-semibold sm:font-bold sm:text-4xl bg-gradient-to-tr from-[#2affec] to-green-700 bg-clip-text text-transparent">
                DevChallenge{" "}
              </span>
              Sharpen your <br /> coding skills with real challenges.
            </p>
          </div>
          <div className="flex items-center pt-8 max-w-full">
            <div className="">
              <div className="lightning-line"></div>
              <div className="glow-effect"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#191919] col-span-6 h-full">
          <div className="sm:relative top-12 left-12 p-2">
            <Link href={"/"}>
              <button className="border border-gray-400 hover:bg-[#222222] flex justify-center items-center py-1 px-2 gap-1 text-sm font-medium rounded transition-all duration-500">
                <ArrowLeft className="h-5 w-5 font-light text-base" /> Home
              </button>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <div className="wi-[100%]">
              <div className="flex flex-col ">
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-semibold">
                    <span>{loginHeading}</span>
                  </h2>
                  <h4 className="text-md text-gray-400 font-medium">
                    <span>Connect to leetcode with:</span>
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-2 pt-2 gap-2">
                <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt=""
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Google</span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                  <img
                    src="https://github.com/favicon.ico"
                    alt=""
                    className="w-5 h-5"
                  />
                  <span className="font-medium">GitHub</span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                  <img
                    src="https://www.apple.com/favicon.ico"
                    alt="Apple Logo"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Apple</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                  <img
                    src="https://img.icons8.com/color/48/discord-logo.png"
                    alt="Discord Logo"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Discord</span>
                </button>
              </div>

              <div className="flex flex-col w-full items-center justify-center mt-4">
                <div className="flex w-full items-center justify-center space-x-2">
                  <div className="h-[1px] w-16 bg-gray-400"></div>
                  <span className="text-xs text-gray-400 uppercase">
                    {authWithEmailText}
                  </span>
                  <div className="h-[1px] w-16 bg-gray-400"></div>
                </div>

                <AuthForm component={component} />

                <h3 className="flex gap-2 justify-center items-center">
                  <span className="text-gray-400">{userAuthOption}</span>{" "}
                  <Link href={component == "signup" ? "/signin" : "signup"}>
                    <span className="text-blue-600">{userAuthAction}</span>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
