import { LinksModel } from '@/models/links/index.js';

const remove = async ({ id }: { id: string }) => {
  const result = await LinksModel.findByIdAndDelete(id).exec();
  return result !== null;
};

export { remove };
