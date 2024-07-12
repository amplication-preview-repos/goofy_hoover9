import { Match } from "../match/Match";

export type Partner = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isAvailable: boolean | null;
  name: string | null;
  matches?: Array<Match>;
};
