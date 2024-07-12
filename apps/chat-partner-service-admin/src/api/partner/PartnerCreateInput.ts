import { MatchCreateNestedManyWithoutPartnersInput } from "./MatchCreateNestedManyWithoutPartnersInput";

export type PartnerCreateInput = {
  isAvailable?: boolean | null;
  name?: string | null;
  matches?: MatchCreateNestedManyWithoutPartnersInput;
};
