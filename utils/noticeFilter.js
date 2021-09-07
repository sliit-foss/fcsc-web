import Notice from '../components/carousel/notice/Notice'

export const getFilteredNotices = (isSuccess, noticeList) => {
  let noticeImages = []
  if (isSuccess && noticeList) {
    noticeImages = noticeList.filter((notice) => {
      return (
        notice.photo != '' &&
        notice.photo != undefined &&
        notice.category == 'Latest'
      )
    })

    noticeImages = noticeImages.map((notice, index) => {
      return <Notice key={index.toString()} image={notice.photo}></Notice>
    })

    return noticeImages
  } else {
    return []
  }
}
