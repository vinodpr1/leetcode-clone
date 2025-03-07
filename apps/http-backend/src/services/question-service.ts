import { questions } from "../seed-data";

class QuestionServices {
  constructor() {}

  async getQuestions() {
    try {
      return questions;
    } catch (error) {
      console.error("Error occurred while fetching questions", error);
      throw error;
    }
  }

  async getQuestion(questionId: any) {
    try {
      const question = questions.questions.filter(
        (question) => question.id == questionId,
      );
      return question;
    } catch (error) {
      console.error("Error occurred while fetching questions", error);
      throw error;
    }
  }
}

export { QuestionServices };
