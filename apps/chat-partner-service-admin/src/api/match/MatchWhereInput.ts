import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";

export type MatchWhereInput = {
  id?: StringFilter;
  isMatched?: BooleanNullableFilter;
  partner?: PartnerWhereUniqueInput;
};
