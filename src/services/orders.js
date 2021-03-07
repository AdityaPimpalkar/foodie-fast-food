import httpService from "./httpService";

const apiEndpoint = "http://localhost:3001/api/order";

export async function getOrders() {
  const orders = await httpService.get(apiEndpoint);
  return orders;
}

export async function createOrder(order) {
  const orders = await httpService.put(apiEndpoint, order);
  return orders;
}

export async function GetOrderDetails(order_number) {
  const orders = await httpService.get(apiEndpoint, { order_id: order_number });
  return orders;
}
