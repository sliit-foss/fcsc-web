import { apiInstance } from '../apiInstance'
import { EventData } from './event.interface'

export async function getEvents(): Promise<EventData[] | boolean> {
  const response = await apiInstance.get('/events/allevents/fcsc')
  return response.data.data as EventData[]

}

export async function getLatestEvents(): Promise<EventData[] | boolean> {
  const response = await apiInstance.get('/events/latest/fcsc')
  return response.data.data as EventData[]
}