"use client";
import { useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { signInAction, signUpAction } from "./authActions";

const AuthForm = ({ component }: { component: string }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    try {
      if (component == "signin") {
        signInAction(formData);
      } else {
        signUpAction(formData);
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full pb-6">
      {component === "signup" && (
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">
            <span className="text-sm text-gray-400">Name</span>
          </label>
          <div>
            <input
              name="name"
              className="w-[100%] bg-[#212121] border border-gray-600 rounded px-4 py-2"
              type="text"
              required
            />
          </div>
        </div>
      )}

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="email">
          <span className="text-sm text-gray-400">Email</span>
        </label>
        <div>
          <input
            name="email"
            className="w-[100%] bg-[#212121] border border-gray-600 rounded px-4 py-2"
            type="email"
            required
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="password">
          <span className="text-sm text-gray-400">Password</span>
        </label>
        <div>
          <input
            name="password"
            className="w-[100%] bg-[#212121] border border-gray-600 rounded px-4 py-2"
            type="password"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#212121] text-gray-500 py-2 rounded border border-gray-600 w-full flex flex-col gap-2"
      >
        {loading ? (
          <Spin indicator={<LoadingOutlined spin />} />
        ) : component === "signin" ? (
          "Log in"
        ) : (
          "Sign up"
        )}
      </button>
    </form>
  );
};

export default AuthForm;
