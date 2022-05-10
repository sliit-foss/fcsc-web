import { apiInstance } from '../apiInstance'
import { NoticeData } from './notice.interface'

export async function addNotice(requestData: any): Promise<boolean> {
  const response = await apiInstance.post(`/notices`, requestData)
  return response.data.data
}

export async function deleteNotice(id: string): Promise<string | boolean> {
  const response = await apiInstance.delete(`/notices/${id}`)
  return response.data.data
}

export async function getNotices(): Promise<NoticeData[] | boolean> {
  const response = await apiInstance.get('/notices')
  return response.data.data as NoticeData[]
}

export async function editNotice(id: string, requestData: any): Promise<boolean> {
  const response = await apiInstance.put(`/notices/${id}`, requestData)
  return response.data.data
}
