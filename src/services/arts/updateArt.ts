import { type Art, ArtsModel } from '@/models/arts/index.js';

const update = async (
  id: string,
  data: Partial<Omit<Art, '_id'>>
): Promise<boolean> => {
  const result = await ArtsModel.findByIdAndUpdate(id, data).exec();
  return result !== null;
};

export { update };
