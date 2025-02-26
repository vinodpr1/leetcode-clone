// mark as client component
"use client";

import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // extracting of sesn and show log in vala component
  const { data: session } = useSession();
  //not logged in users
  return (
    <div>
      <Navbar />
      <div className="mt-12 bg-black"></div>
    </div>
  );
}
