import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MatchListRelationFilter } from "../match/MatchListRelationFilter";

export type PartnerWhereInput = {
  id?: StringFilter;
  isAvailable?: BooleanNullableFilter;
  name?: StringNullableFilter;
  matches?: MatchListRelationFilter;
};
