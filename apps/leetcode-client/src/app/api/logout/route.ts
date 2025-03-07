import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.redirect(
      new URL("/", "http://localhost:3000/"),
    );
    response.cookies.set("authToken", "", {
      path: "/",
      expires: new Date(0),
    });
    return response;
  } catch (error: any) {
    return NextResponse.json(
      { message: "Logout failed", error: error.message },
      { status: 500 },
    );
  }
}
