import { RaidModel } from '@/models/raids/index.js';

const get = async () => {
  const raids = await RaidModel.find().exec();

  if (!raids || raids.length === 0) return null;

  return raids;
};

export { get };
