import React from "react";
import { Github, Linkedin, Youtube, Twitter, ExternalLink } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto bg-black py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-md font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  Contact Sales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  Security
                </a>
              </li>
              <li>
                <div className="flex items-center group text-sm">
                  <a
                    href="#"
                    className="text-gray-400 group-hover:text-green-500"
                  >
                    Legal
                  </a>
                  <ExternalLink className="ml-1 h-4 w-4 text-gray-400 group-hover:text-green-500" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  Community Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  PostgreSQL Tutorial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 text-sm"
                >
                  Creators
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">SOCIAL</h3>
            <ul className="space-y-3">
              <li className="group">
                <a
                  href="#"
                  className="flex items-center text-sm text-gray-400  group-hover:text-green-500"
                >
                  <div className="w-6 h-6 mr-1 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 12h8M12 8v8M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    </svg>
                  </div>
                  Discord
                </a>
              </li>
              <li className="group">
                <a
                  href="#"
                  className="flex items-center text-sm text-gray-400  group-hover:text-green-500"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </li>
              <li className="group">
                <a
                  href="#"
                  className="flex items-center text-sm text-gray-400  group-hover:text-green-500"
                >
                  <Twitter className="mr-2 h-5 w-5" />
                  x.com
                </a>
              </li>
              <li className="group">
                <a
                  href="#"
                  className="flex items-center text-sm text-gray-400  group-hover:text-green-500"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </li>
              <li className="group">
                <a
                  href="#"
                  className="flex items-center text-sm text-gray-400  group-hover:text-green-500"
                >
                  <Youtube className="mr-2 h-5 w-5" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0 text-sm text-gray-400">
              <p>Made in SF and the World</p>
              <p>Copyright © 2022 - 2025 Neon, Inc.</p>
            </div>
            <div className="text-xl font-bold bg-gradient-to-tr from-[#2affec] to-green-700 bg-clip-text text-transparent">
              <Link href={"/"}>LeetHub</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
