import React from "react";
import { Database, Github, ChevronRight } from "lucide-react";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="mt-20 hero-bg flex-grow flex items-center justify-center relative">
        <div className="absolute inset-0 dot-pattern z-10"></div>

        <div className="glow top-1/4 left-1/4 z-0"></div>
        <div className="glow bottom-1/4 right-1/3 z-0"></div>
        <div className="glow top-1/3 right-1/4 z-0"></div>

        <div className="glow top-1/4 left-1/4 z-0"></div>
        <div className="glow bottom-1/4 right-1/3 z-0"></div>
        <div className="glow top-1/3 right-1/4 z-0"></div>

        <div className="glow top-1/2 left-1/4 z-0"></div>
        <div className="glow bottom-1/2 right-1/2 z-0"></div>
        <div className="glow top-1/2 right-1/2 z-0"></div>

        <div className="container mx-auto px-6 relative z-20 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Level up with <span className="text-[#25f5ae]">Leetcode</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            The editor you love, now live! Power up your competitive coding with
            speed and scalability. reliable and scalable applications faster.
          </p>
          <Link href={"/problems/hiiiiiii"}>
            <button className="leetcode-button text-lg">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
