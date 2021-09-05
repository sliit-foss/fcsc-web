import { useQuery, UseQueryResult } from 'react-query'
import { EventEndpoints } from '../pages/api/event'
import { EventData } from '../pages/api/event/event.interface'

const EVENTS_LIST = 'EVENTS_LIST'

export function useGetEvents(): UseQueryResult<EventData[], boolean> {
  return useQuery(EVENTS_LIST, EventEndpoints.getEvents)
}

const LATEST_EVENTS = 'LATEST_EVENTS'

export function useGetLatestEvents(): UseQueryResult<EventData[], boolean> {
  return useQuery(LATEST_EVENTS, EventEndpoints.getLatestEvents)
}