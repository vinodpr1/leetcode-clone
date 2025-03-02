import { questions } from "../seed-data";

class QuestionServices {
  constructor() {}

  async  getQuestion() {
     try { 
        return questions;
     } catch (error) {
        console.error("Error occurred while fetching questions", error);
        throw error;
     }
  }

}

export { QuestionServices };
