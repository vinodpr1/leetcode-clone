// mark as client component
"use client";

import { ArrowLeft } from "lucide-react";
// importing necessary functions
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

export default function Home() {
  // extracting data from usesession as session
  const { data: session } = useSession()

  // checking if sessions exists
  if (session) {
    // rendering components for logged in users
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-44 h-44 relative mb-4">
          <Image
            src={session.user?.image as string}
            fill
            alt=""
            className="object-cover rounded-full"
          />
        </div>
        <p className="text-2xl mb-2">Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As</p>
        <p className="font-bold mb-4">{session.user?.email}</p>
        <button className="bg-red-600 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  // rendering components for not logged in users
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="grid grid-cols-5 md:flex md:flex-col">

        <div className="bg-[#131313] col-span-2 flex justify-center items-center">
          <p className="text-3xl font-semibold">
            <span className="font-bold text-4xl bg-gradient-to-tr from-[#2affec] to-green-700 bg-clip-text text-transparent">DevChallenge </span>
            Sharpen your <br /> coding  skills  with real challenges.
          </p>
        </div>

        <div className="bg-[#191919] flex col-span-3">

          <div className="relative top-12 left-12">
            <button className="border border-gray-400 flex justify-center items-center py-1 px-2 gap-1 font-medium rounded">
              <ArrowLeft className="h-5 w-5 font-light text-base" /> Home
            </button>
          </div>


          <div className="flex flex-col w-full mt-14">

            <div className="max-w-lg px-12 flex flex-col justify-center items-center">
              <div>
                <div className="flex flex-col ">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold">
                      <span>Log in to your account</span>
                    </h2>
                    <h4 className="text-xl font-medium">
                      <span>Connect to Neon with:</span>
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col items-center mt-4 w-full">

                  <div className="grid grid-cols-2 gap-2">

                    <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                      <img src="https://www.google.com/favicon.ico" alt="" className="w-5 h-5" />
                      <span className="font-medium">Google</span>
                    </button>

                    <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                      <img src="https://github.com/favicon.ico" alt="" className="w-5 h-5" />
                      <span className="font-medium">GitHub</span>
                    </button>

                    <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                      <img src="https://www.microsoft.com/favicon.ico" alt="" className="w-5 h-5" />
                      <span className="font-medium">Microsoft</span>
                    </button>

                    <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                      <img src="https://hasura.io/favicon.ico" alt="" className="w-5 h-5" />
                      <span className="font-medium">Hasura</span>
                    </button>

                  </div>

                  <div className="flex w-full items-center justify-center space-x-2 mt-4">
                    <div className="h-[1px] w-8 bg-gray-400"></div>
                    <span className="text-xs text-gray-400 uppercase">or log in with your email</span>
                    <div className="h-[1px] w-8 bg-gray-400"></div>
                  </div>

                  <div className="flex flex-col gap-4 items-center justify-center pt-4 w-full">
                    <div className=" w-full flex flex-col gap-2">
                      <label htmlFor="email">
                        <span className="text-sm text-gray-400">Email</span>
                      </label>
                      <div>
                        <input className="w-[100%] bg-[#212121] border border-gray-600 rounded px-4 py-2" type="text" />
                      </div>
                    </div>

                    <div className=" w-full flex flex-col gap-2">
                      <label htmlFor="email">
                        <span className="text-sm text-gray-400">Password</span>
                      </label>
                      <div>
                        <input className="w-[100%] bg-[#212121] border border-gray-600 rounded px-4 py-2" type="text" />
                      </div>
                    </div>

                    <div className="bg-[#212121] py-2 rounded border border-gray-600 w-full flex flex-col gap-2">
                      <button className="text-gray-500">
                        Log in
                      </button>
                    </div>

                    <h3 className="flex gap-2 justify-center items-center">
                      <span>New to Leetcode?</span> <span className="text-blue-600"> Sign up for an account</span>
                    </h3>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}


// <p className="text-2xl mb-2">Not Signed In</p>
// <button className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2" onClick={() => signIn('github')}>Sign in with github</button>