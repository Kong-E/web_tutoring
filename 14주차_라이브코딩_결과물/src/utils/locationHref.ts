/* eslint-disable no-undef */
type LocationHrefProps = {
  location: string
  newWindow?: boolean
}

export const locationHref = ({ location, newWindow = false }: LocationHrefProps) => {
  if (newWindow) {
    window.open(location)
    return
  }
  window.location.href = location
  return
}
