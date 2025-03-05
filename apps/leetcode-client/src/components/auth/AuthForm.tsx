"use client";
import { useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { signInAction, signUpAction } from "./authActions";
import { userSchema, authSchema } from "@repo/common/types";
import { ToastContainer, toast } from "react-toastify";

const AuthForm = ({ component }: { component: string }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    console.log("FORAMDATA", formData.get("email"));
    try {
      if (component == "signin") {
        const data = {
          email: formData.get("email"),
          password: formData.get("password"),
        };
        const zodRes = authSchema.safeParse(data);
        if (!zodRes.success) {
          toast.error("Please check credential");
          setLoading(false);
          return;
        }
        signInAction(formData);
      } else {
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
        };
        const zodRes = userSchema.safeParse(data);
        if (!zodRes.success) {
          toast.error("Please check credential");
          setLoading(false);
          return;
        }
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
      <ToastContainer />
    </form>
  );
};

export default AuthForm;
