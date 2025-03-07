import "../app/globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import Hero from "./Hero";
import Events from "./Events";
import Questions from "./Questions";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto">
      <main className="flex-1">
        <Hero />
        <Events />
        <section>
          <div>
            <Questions />
          </div>
        </section>
      </main>
    </div>
  );
}
