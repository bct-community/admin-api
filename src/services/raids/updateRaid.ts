import { type Raid, RaidModel } from '@/models/raids/index.js';

const update = async (id: string, updateData: Raid) => {
  const updatedRaid = await RaidModel.findByIdAndUpdate(id, updateData).exec();

  return updatedRaid;
};

export { update };
