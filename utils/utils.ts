export const disableAos = (className: string, delay: number): void => {
    setTimeout(() => {
      if (process.browser) {
        const eventItems = document.querySelectorAll(`.${className}`)
        eventItems.forEach((item: any) => {
          item.removeAttribute('data-aos')
        })
      }
    }, delay)
  }
  