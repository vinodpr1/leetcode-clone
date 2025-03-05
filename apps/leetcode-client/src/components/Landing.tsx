import "../app/globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";

async function Landing() {

  const cookieStore = await cookies()  
  const authToken = cookieStore.get('authToken')?.value;

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <div className="w-full border-b border-gray-500">
        <Navbar />
      </div>
      <div className="w-full">
        <div className="max-w-6xl mx-auto mt-20 hero-bg flex-grow flex items-center justify-center relative">
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
            <h1 className="text-3xl md:text-7xl font-semibold text-white mb-6 leading-tight">
              Level up with <span className="text-[#25f5ae]">Leetcode</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              The editor you love, now live! Power up your competitive coding
              with speed and scalability. reliable and scalable applications
              faster.
            </p>
            <Link href={"/problems/hiiiiiii"}>
              <button className="leetcode-button text-lg">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
