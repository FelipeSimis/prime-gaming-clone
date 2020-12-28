interface InGameLoot {
  _id: string;
  title: string;
  company: string;
  offerEndTime: string;
  hasCode: boolean;
  code: string;
  image: string;
}

interface GameLoot {
  _id: string;
  title: string;
  company: string;
  offerEndTime: string;
  image: string;
  isClaimed: boolean;
}

export type { InGameLoot, GameLoot };
