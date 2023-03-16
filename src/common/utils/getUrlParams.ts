export const getUrlParams = () => {
  const location = window.location.hash.substring(3).split('&')

  return location.reduce((accum: { [index: string]: string } = {}, item) => {
    const current = item.split('=')

    accum[current[0]] = current[1]

    return accum
  }, {})
}
