import { useQuery, UseQueryResult } from 'react-query'
import { NoticeEndpoints } from '../pages/api/notice'
import { NoticeData } from '../pages/api/notice/notice.interface'

const NOTICE_LIST = 'NOTICE_LIST'

export function useGetNotices(): UseQueryResult<NoticeData[], boolean> {
  return useQuery(NOTICE_LIST, NoticeEndpoints.getNotices)
}
