import axios from "axios";
import { X_RapidAPI_Key, X_RapidAPI_Host } from "../config/dotenvconfig";

class SubmitServices {
  constructor() {}
   async  SubmitQuestion(data:any) {
    try {

      const submissionUrl = "https://judge0-ce.p.rapidapi.com/submissions";
      const headers = {
        "X-RapidAPI-Key": X_RapidAPI_Key,
        "X-RapidAPI-Host": X_RapidAPI_Host,
        "Content-Type": "application/json",
      };

      const postResponse = await axios.post(submissionUrl, {
        source_code: data.code,
        language_id: data.languageId,
      }, { headers });
  
      const token = postResponse.data.token;
    
      const delay = (ms:any) => new Promise(resolve => setTimeout(resolve, ms));
  
      const pollForResult = async () => {
        for (let i = 0; i < 10; i++) { 
          await delay(2000);
          const response = await axios.get(`${submissionUrl}/${token}`, { headers });
  
          if (response.data.status && response.data.status.id >= 3) {
            return response.data;
          }
        }
        throw new Error("Execution timeout");
      };
  
      const [finalResponse] = await Promise.all([pollForResult()]);
      console.log("Output:", finalResponse.stdout || finalResponse.stderr || "No Output");
      return finalResponse.stdout || finalResponse.stderr;
    } catch (error) {
      console.error("Error occurred in SubmitQuestion:", error);
      throw error;
    }
  }
  
}

export { SubmitServices };
