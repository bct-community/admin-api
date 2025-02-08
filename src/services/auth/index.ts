import { AuthModel } from '@/models/auth/index.js';

const auth = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await AuthModel.findOne({ email });

  if (!user) return false;

  const isPasswordValid = user.password === password;

  return isPasswordValid;
};

export { auth };
