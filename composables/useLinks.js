export const useLinks = () => {
  return {
    internalLink: (link) => {
      let cachedUrl
      if (typeof link === 'object') {
        cachedUrl = link.cached_url
      } else {
        cachedUrl = link
      }
      if (!cachedUrl) return ''
      return cachedUrl.startsWith('/') ? cachedUrl : '/' + cachedUrl
    }
  }
}
