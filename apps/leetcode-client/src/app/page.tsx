// mark as client component
"use client";

import { ArrowLeft } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // extracting data from usesession as session
  const { data: session } = useSession();

  //not logged in users
  return (
    <>
    <h1>Hi There</h1>
    <Link href={"/signin"}>Login</Link>
   </>
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
