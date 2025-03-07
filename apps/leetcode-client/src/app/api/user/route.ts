import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, password } = await req.json();
  console.log(name, password);
  return Response.json({
    username: "vinodpr",
    email: "vinodpr737947@gmail.com",
    password: "Vinod",
  });
}
