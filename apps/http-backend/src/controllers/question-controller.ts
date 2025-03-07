import { QuestionServices } from "../services/question-service";
const questionServices = new QuestionServices();

export const getQuestions = async (req: any, res: any) => {
  try {
    const questions = await questionServices.getQuestions();
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

export const getQuestion = async (req: any, res: any) => {
  try {
    const questionId = req.query.id;
    const question = await questionServices.getQuestion(questionId);
    res.status(200).json({
      res: question,
      message: "Questions fetched successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "can't fetched successfully",
      err: error,
    });
  }
};
