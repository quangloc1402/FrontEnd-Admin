export const setLocalStorage = (key: string, value: unknown) => {
  if (!value) return
  if (typeof value === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else window.localStorage.setItem(key, value as string)
}
export const getLocalStorage = (key: string) => {
  try {
    const data = JSON.parse(window.localStorage.getItem(key) ?? '')
    if (data) return data
  } catch (error) {
    return window.localStorage.getItem(key)
  }
}

export const removeLocalStorage = (key: string) => {
  window.localStorage.removeItem(key)
}

export const calculateTimeAgo = (timestamp: number) => {
  const currentTime = Date.now()
  const pastTime = currentTime - timestamp

  const diffTime = Math.floor(pastTime / 1000)
  const minute = 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const year = day * 365

  if (diffTime < minute) {
    return `${diffTime} seconds ago`
  } else if (diffTime < hour) {
    const minutes: number = Math.floor(diffTime / minute)
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  } else if (diffTime < day) {
    const hours: number = Math.floor(diffTime / hour)
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  } else if (diffTime < month) {
    const days: number = Math.floor(diffTime / day)
    return `${days} day${days > 1 ? 's' : ''} ago`
  } else if (diffTime < year) {
    const months: number = Math.floor(diffTime / month)
    return `${months} month${months > 1 ? 's' : ''} ago`
  } else {
    const years: number = Math.floor(diffTime / year)
    return `${years} year${years > 1 ? 's' : ''} ago`
  }
}
