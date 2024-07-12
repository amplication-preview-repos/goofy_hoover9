import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";

export type MatchUpdateInput = {
  isMatched?: boolean | null;
  partner?: PartnerWhereUniqueInput | null;
};
