import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";

export type MatchCreateInput = {
  isMatched?: boolean | null;
  partner?: PartnerWhereUniqueInput | null;
};
