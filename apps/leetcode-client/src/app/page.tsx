// mark as client component
"use client";

import { ArrowLeft } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  // extracting data from usesession as session
  const { data: session } = useSession();

  //not logged in users
  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden">
      <div className="h-full w-full flex flex-col lg:grid lg:grid-cols-10">
        <div className="bg-[#131313] py-12 col-span-4 flex justify-center items-center">
          <p className="text-2xl font-medium sm:text-3xl sm:font-semibold">
            <span className="text-3xl font-semibold sm:font-bold sm:text-4xl bg-gradient-to-tr from-[#2affec] to-green-700 bg-clip-text text-transparent">
              DevChallenge{" "}
            </span>
            Sharpen your <br /> coding skills with real challenges.
          </p>
        </div>

        <div className="bg-[#191919] col-span-6 h-full">
          <div className="sm:relative top-12 left-12 p-4">
            <button className="border border-gray-400 flex justify-center items-center py-1 px-2 gap-1 font-medium rounded">
              <ArrowLeft className="h-5 w-5 font-light text-base" /> Home
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="wi-[100%]">
              <div className="flex flex-col ">
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-semibold">
                    <span>Log in to your account</span>
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
                    src="https://www.microsoft.com/favicon.ico"
                    alt=""
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Microsoft</span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                  <img
                    src="https://hasura.io/favicon.ico"
                    alt=""
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Hasura</span>
                </button>
              </div>

              <div className="flex flex-col w-full items-center justify-center mt-4">
                <div className="flex w-full items-center justify-center space-x-2">
                  <div className="h-[1px] w-16 bg-gray-400"></div>
                  <span className="text-xs text-gray-400 uppercase">
                    or log in with your email
                  </span>
                  <div className="h-[1px] w-16 bg-gray-400"></div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="email">
                      <span className="text-sm text-gray-400">Email</span>
                    </label>
                    <div>
                      <input
                        className="w-[100%] bg-[#212121] border border-gray-600 rounded px-4 py-2"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className=" w-full flex flex-col gap-2">
                    <label htmlFor="email">
                      <span className="text-sm text-gray-400">Password</span>
                    </label>
                    <div>
                      <input
                        className="w-[100%] bg-[#212121] border border-gray-600 rounded px-4 py-2"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="bg-[#212121] py-2 rounded border border-gray-600 w-full flex flex-col gap-2">
                    <button className="text-gray-500">Log in</button>
                  </div>

                  <h3 className="flex gap-2 justify-center items-center">
                    <span className="text-gray-400">New to Leetcode?</span>{" "}
                    <span className="text-blue-600">
                      {" "}
                      Sign up for an account
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// checking if sessions exists
// if (session) {
//   // rendering components for logged in users
//   return (
//     <div className="w-full h-screen flex flex-col justify-center items-center">
//       <div className="w-44 h-44 relative mb-4">
//         <Image
//           src={session.user?.image as string}
//           fill
//           alt=""
//           className="object-cover rounded-full"
//         />
//       </div>
//       <p className="text-2xl mb-2">
//         Welcome <span className="font-bold">{session.user?.name}</span>.
//         Signed In As
//       </p>
//       <p className="font-bold mb-4">{session.user?.email}</p>
//       <button
//         className="bg-red-600 py-2 px-6 rounded-md"
//         onClick={() => signOut()}
//       >
//         Sign out
//       </button>
//     </div>
//   );
// }
