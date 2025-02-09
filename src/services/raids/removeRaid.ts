import { RaidModel } from '@/models/raids/index.js';

const remove = async (id: string) => {
  const deletedRaid = await RaidModel.findByIdAndDelete(id).exec();
  return deletedRaid;
};

export { remove };
