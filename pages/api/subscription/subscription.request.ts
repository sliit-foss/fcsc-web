import { apiInstance } from '../apiInstance'

export async function subscribe(requestData: any): Promise<boolean> {
  try {
    const response = await apiInstance.post(`subscriptions/subscribe/fcsc`, requestData)
    return response.data
  } catch (e: any) {
    throw JSON.stringify(e.response)
  }
}
