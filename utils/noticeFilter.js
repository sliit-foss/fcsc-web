import Notice from '../components/carousel/notice/Notice'

export const getFilteredNotices = (isSuccess, noticeList) => {
  let noticeImages = []
  if (isSuccess && noticeList) {
    noticeImages = noticeList.filter((notice) => notice.category == 'Latest')

    noticeImages = noticeImages.map((notice, index) => {
      return (
        <Notice
          key={index.toString()}
          image={notice.photo || '/notices/default.jpg'}
          description={notice.body}
          createdAt={notice.createdAt}
        ></Notice>
      )
    })

    return noticeImages
  } else {
    return []
  }
}
