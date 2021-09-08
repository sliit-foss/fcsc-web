import { apiInstance } from '../apiInstance'
import { NoticeData } from './notice.interface'

export async function addNotice(requestData: any): Promise<boolean> {
  try {
    const response = await apiInstance.post(`/notices`, requestData)
    return response.data
  } catch (e: any) {
    throw JSON.stringify(e.response)
  }
}

export async function deleteNotice(id: string): Promise<string | boolean> {
  try {
    const response = await apiInstance.delete(`/notices/${id}`)
    return response.data
  } catch (e: any) {
    throw JSON.stringify(e.response)
  }
}

export async function getNotices(): Promise<NoticeData[] | boolean> {
  try {
    const response = await apiInstance.get('/notices')
    return response.data as NoticeData[]
  } catch (e: any) {
    console.error(e.message)
    return false
  }
}

export async function editNotice(
  id: string,
  requestData: any
): Promise<boolean> {
  try {
    const response = await apiInstance.put(`/notices/${id}`, requestData)
    return response.data
  } catch (e: any) {
    throw JSON.stringify(e.response)
  }
}
