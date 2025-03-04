"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const response = await fetch("http://localhost:3100/api/v1/user/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  // console.log("AAli re aali", response);
  const data = await response.json();
  console.log("AAli re aali", data);

  (await cookies()).set("authToken", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
  });
  // redirect("/ide");
}

export async function signUpAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const response = await fetch("http://localhost:3100/api/v1/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();

  (await cookies()).set("authToken", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
  });
  redirect("/ide");
}
