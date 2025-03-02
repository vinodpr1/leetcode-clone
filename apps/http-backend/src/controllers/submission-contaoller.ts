import { SubmitServices } from "../services";
const submitService = new SubmitServices();

export const Submit = async (req: any, res: any) => {
  try {
    const data = req.body;
    console.log(data);
    const response =await submitService.SubmitQuestion(data);
    res.status(200).json({
      res: response,
      message: "Submission made successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "can't exetcute the code",
      err: error,
    });
  }
};
