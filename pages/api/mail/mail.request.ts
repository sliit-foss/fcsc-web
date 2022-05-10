import { apiInstance } from '../apiInstance'
import { MailData } from './mail.interface'

export async function sendMail(requestData: MailData): Promise<boolean> {
  const PATH = '/mail'
  const res = await apiInstance.post(PATH, requestData)
  return res.data.data
}
