import { prismaClient } from "@repo/db/prismaClient";

class UserRepository {
  constructor() {}

  async SignUp(data: any, hashedPassword:any) {
    const user = await prismaClient.user.create({
      data: { name: data.name, email: data.email, password: hashedPassword },
    });
    return user;
  }

  async SignIn(data: any) {
      const user = await prismaClient.user.findUnique({
        where: { email: data.email },
      });
      return user;
  }

  async getBulkUser() {
      const users = await prismaClient.user.findMany({
        omit: { password: true },
      });
      return users;
  }
}

export { UserRepository };
