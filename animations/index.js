export const mobileNavVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: '100%',
    transition: {
      ease: [0.6, 0.05, -0.01, 0.9],
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: [0.6, 0.05, -0.01, 0.9],
      duration: 0.6,
    },
  },
}

export const navElementsVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
}
