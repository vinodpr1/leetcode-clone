import { NotFoundError, UnauthorizeError } from "../errorhandlers/client-error";
import { UserRepository } from "../repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userRepository = new UserRepository();

class UserServices {
  constructor() {}
  async SignUp(data: any) {
    try {
      const hashedPassword = bcrypt.hashSync(data.password, 10);
      const user = await userRepository.SignUp(data, hashedPassword);
      const jwtToken = jwt.sign({ id: user.id }, "vinodpr");
      return jwtToken;
    } catch (error) {
      console.log("Eoor has occured at user controller", error);
      throw error || Error("Signup Failed");
    }
  }

  async SignIn(data: any) {
    try {
      const user = await userRepository.SignIn(data);
      if (!user) {
        throw new NotFoundError("User is not find in database");
      }
      const isMatchpassword = bcrypt.compareSync(data.password, user.password);
      if (!isMatchpassword) {
        throw new UnauthorizeError("Password does't matched");
      }
      const jwtToken = jwt.sign({ id: user?.id }, "vinodpr");
      return jwtToken;
    } catch (error) {
      throw error || Error("Signin Failed");
    }
  }

  async getBulkUser() {
    try {
      const response = await userRepository.getBulkUser();
      return response;
    } catch (error) {
      throw error || Error("User fetch failed");
    }
  }
}

export { UserServices };
