import Problem from "@/components/CodeEditor/Problem";
import { cookies } from "next/headers";

const page = async ({ params }: { params: { problem: string } }) => {
  const param = await params;

  const token = await cookies();
  const authTOken = token.get("authToken")?.value;

  return <Problem questionID={param.problem} authTOken={authTOken} />;
};

export default page;
