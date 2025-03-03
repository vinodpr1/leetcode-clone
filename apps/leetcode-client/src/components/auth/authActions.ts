"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const response = await axios.post(
    "http://localhost:3100/api/v1/auth/signin",
    { email, password },
  );
  console.log(response.data);

  (await cookies()).set("authToken", response.data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
  });
  redirect("/ide");
}

export async function signUpAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const response = await axios.post(
    "http://localhost:3100/api/v1/auth/signup",
    { name, email, password },
  );
  console.log(response.data);

  (await cookies()).set("authToken", response.data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
  });
  redirect("/ide");
}
