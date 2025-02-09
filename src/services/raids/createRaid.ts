import { RaidModel, type Raid } from '@/models/raids/index.js';

const create = async ({ content, date, platform, shareMessage, url }: Raid) => {
  const newRaid = new RaidModel({ content, date, platform, shareMessage, url });
  return await newRaid.save();
};

export { create };
