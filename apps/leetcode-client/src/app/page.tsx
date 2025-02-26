// mark as client component
"use client";

import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // extracting data from usesession as session
  const { data: session } = useSession();

  //not logged in users
  return (
    <div>
      <Navbar />
      <div className="mt-12">
        <div>
          Hii1 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Cupiditate tenetur, id in sint facilis consectetur recusandae animi
          error quam est itaque beatae a illum fugit numquam nobis magni
          provident porro ut. Ratione minus asperiores nam possimus, architecto
          voluptatibus et voluptates!
        </div>
        <div>Hii2</div>
        <div>Hii3</div>
        <div>Hii4</div>
        <div>Hii5</div>
        <div>Hii6</div>
        <div>Hii7</div>
        <div>Hii1</div>
        <div>Hii2</div>
        <div>Hii3</div>
        <div>Hii4</div>
        <div>Hii5</div>
        <div>Hii6</div>
        <div>Hii7</div>
        <div>Hii1</div>
        <div>Hii2</div>
        <div>Hii3</div>
        <div>Hii4</div>
        <div>Hii5</div>
        <div>Hii6</div>
        <div>Hii7</div>
        <div>Hii1</div>
        <div>Hii2</div>
        <div>Hii3</div>
        <div>Hii4</div>
        <div>Hii5</div>
        <div>Hii6</div>
        <div>Hii7</div>
        <div>Hii1</div>
        <div>Hii2</div>
        <div>Hii3</div>
        <div>Hii4</div>
        <div>Hii5</div>
        <div>Hii6</div>
        <div>Hii7</div>
        <div>Hii1</div>
        <div>Hii2</div>
        <div>Hii3</div>
        <div>Hii4</div>
        <div>Hii5</div>
        <div>Hii6</div>
        <div>Hii7</div>

        <div>Hii1</div>
        <div>Hii2</div>
        <div>Hii3</div>
        <div>Hii4</div>
        <div>Hii5</div>
        <div>Hii6</div>
        <div>Hii7</div>
        <div>Hii1</div>
        <div>Hii2</div>
        <div>Hii3</div>
        <div>Hii4</div>
        <div>Hii5</div>
        <div>Hii6</div>
        <div>Hii7</div>
        <div>Hii1</div>
        <div>Hii2</div>
        <div>Hii3</div>
        <div>Hii4</div>
        <div>Hii5</div>
        <div>Hii6</div>
        <div>Hii7</div>
        <div>Hii1</div>
        <div>Hii2</div>
        <div>Hii3</div>
        <div>Hii4</div>
        <div>Hii5</div>
        <div>Hii6</div>
        <div>Hii7</div>
        <div>Hii1</div>
        <div>Hii2</div>
        <div>Hii3</div>
        <div>Hii4</div>
        <div>Hii5</div>
        <div>Hii6</div>
        <div>Hii7</div>
      </div>

      {/* <div className="bg-pink-500 h-[2000px] pt-12">
      hii
      <Link href={"/signin"}>Login</Link>
     </div> */}
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
