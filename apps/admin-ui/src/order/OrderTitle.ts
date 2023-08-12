import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "note";

export const OrderTitle = (record: TOrder): string => {
  return record.note || String(record.id);
};
