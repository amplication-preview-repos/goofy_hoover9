import { SortOrder } from "../../util/SortOrder";

export type PartnerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isAvailable?: SortOrder;
  name?: SortOrder;
};
