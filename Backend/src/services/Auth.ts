// services to handle the business logic of the application
import type { FastifyReply } from 'fastify';
import { AuthModel } from '../models/Auth';
import crypto from 'bcrypt';
// biome-ignore lint/style/useImportType: dont care
import z from 'zod';
import  type { getTokenBodyValidation, postRegisterBodyValidation } from '../validations/Auth';

type UserCredentials = z.infer<typeof getTokenBodyValidation>;
type User = z.infer<typeof postRegisterBodyValidation>;

export const AuthService = {
  getToken: async (userCredentials: UserCredentials, reply: FastifyReply) => {
    const { email, password } = userCredentials;
    const user = await AuthModel.findOne({ email});
    if (!user) {
      return { auth: false, token: null };
    }

    if (!crypto.compareSync(password, user.password)) {
      return { auth: false, token: null };
    }

    const jwt = await reply.jwtSign({ id: user._id });
    return { auth: true, token: jwt };
  },

  register: async (User: User, reply: FastifyReply) => {
    const { name, email, password } = User;

    const user = await AuthModel.findOne({ email });
    if (user) {
      return { success: false, message: 'User already exists' };
    }

    const hashedPassword = crypto.hashSync(password, 10);
    const newUser = new AuthModel({ name, email, password: hashedPassword });
    await newUser.save();

    return { success: true, message: 'User created successfully' };
  },
};
