import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prismaClient } from "@repo/db/prismaClient";

class UserRepository {
  constructor() {}

  async SignUp(data: any) {
    try {
      const hashedPassword = bcrypt.hashSync(data.password, 10);
      console.log("PPP", data.password)
      const user = await prismaClient.user.create({
        data: { name: data.name, email: data.email, password: hashedPassword },
      });
      const jwtToken = jwt.sign({ id: user.id }, "vinodpr");
      console.log("token", jwtToken);
      console.log("User", user);
      return jwtToken;
    } catch (error) {
      console.log("Eoor has occured at user controller");
      throw error;
    }
  }

  async SignIn(data: any) {
    try {
      const user = await prismaClient.user.findUnique({
        where: { email: data.email },
      });
      if (!user) {return "User is not find in database";
        // throw new NotFoundError("User is not find in database");
      }
      const isMatchpassword = bcrypt.compareSync(data.password, user.password);
      if (!isMatchpassword) { return "Password does't matched";
        // throw new UnauthorizeError("Password does't matched");
      }
      const jwtToken = jwt.sign({ id: user?.id }, "vinodpr");
      return jwtToken;
    } catch (error) {
      console.log("Eoor has occured at repository controller", error);
      throw error;
    }
  }

}

export { UserRepository };