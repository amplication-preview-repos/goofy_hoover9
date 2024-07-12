import { MatchUpdateManyWithoutPartnersInput } from "./MatchUpdateManyWithoutPartnersInput";

export type PartnerUpdateInput = {
  isAvailable?: boolean | null;
  name?: string | null;
  matches?: MatchUpdateManyWithoutPartnersInput;
};
