import { QuestionServices } from "../services/question-service";
const questionServices= new QuestionServices();
export const getQuestions = async (req: any, res: any) => {
  try {
    const questions =await questionServices.getQuestion();
    console.log("Questionnnnnns", questions);
    res.status(200).json({
      res: questions,
      message: "Questions fetched successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "can't fetched successfully",
      err: error,
    });
  }
};
