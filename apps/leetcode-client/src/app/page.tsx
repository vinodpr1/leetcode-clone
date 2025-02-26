// // mark as client component
// "use client";

// import { ArrowLeft } from "lucide-react";
// import { useSession, signIn, signOut } from "next-auth/react";
// import Image from "next/image";
import Link from "next/link";

// export default function Home() {
//   // extracting data from usesession as session
//   const { data: session } = useSession();

//   //not logged in users
//   return (
//     <>
//     <h1>Hi There</h1>
//     <Link href={"/signin"}>Login</Link>
//    </>
//   );
// }
import React from "react";
import "./globals.css";

function page() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-start justify-center p-12">
      <h1 className="text-white text-7xl font-bold mb-8">Edge ready</h1>

      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          <span className="text-white text-6xl font-bold">10</span>
          <span className="text-white text-3xl">ms</span>
          {/* <div className="lightning-line"></div> */}
          {/* <div className="glow-effect"></div> */}
        </div>
      </div>
      <Link href={"/signin"}>Login</Link>

      <div className="text-content">
        <h2 className="text-white text-2xl mb-2">
          The Neon serverless driver,{" "}
          <span className="text-gray-400">designed</span>
        </h2>
        <p className="text-gray-400 text-2xl">for fast queries over HTTP</p>
      </div>

      <div className="code-block mt-8 font-mono text-sm">
        <pre className="text-gray-400">
          <code>
            {`import { neon } from '@neondatabase/serverless';

const sql = neon('postgresql://
uri:pass@proj.us-east-2.aws.neon.tech/db');

const posts = await sql('SELECT * FROM posts');`}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default page;
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
