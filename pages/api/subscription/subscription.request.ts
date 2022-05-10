import { apiInstance } from '../apiInstance'

export async function subscribe(requestData: any): Promise<boolean> {
  const response = await apiInstance.post(`subscriptions/subscribe/fcsc`, requestData)
  return response.data.data
}
