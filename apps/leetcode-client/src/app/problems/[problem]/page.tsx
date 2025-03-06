import Problem from '@/components/CodeEditor/Problem'

const page = async ({ params }: { params: { problem: string } }) => {
 const param = await params;
  return <Problem questionID={param.problem}/>
}

export default page