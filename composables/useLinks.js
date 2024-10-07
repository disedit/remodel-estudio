export const useLinks = () => {
  return {
    internalLink: (link) => {
      let cachedUrl
      let prefix = '/'
      if (typeof link === 'object') {
        cachedUrl = link.cached_url
        prefix = (link.linktype === 'url') ? '' : '/'
      } else {
        cachedUrl = link
      }
      if (!cachedUrl) return ''
      return cachedUrl.startsWith('/') ? cachedUrl : prefix + cachedUrl
    },
    target: (link) => {
      return link.target
    }
  }
}
