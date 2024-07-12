import { Partner } from "../partner/Partner";

export type Match = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isMatched: boolean | null;
  partner?: Partner | null;
};
