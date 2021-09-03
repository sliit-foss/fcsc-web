import { apiInstance } from '../apiInstance'
import { EventData } from './event.interface'

export async function getEvents(): Promise<EventData[] | boolean> {
  try {
    const response = await apiInstance.get('/events')
    return response.data as EventData[]
  } catch (e: any) {
    console.error(e.message)
    return false
  }
}
