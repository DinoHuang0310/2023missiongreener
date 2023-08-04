export default function useClientConfig() {

  const hostname = window.location.hostname
  const isWebtest = hostname.includes('webtest')
  const isDev = process.env.NODE_ENV === 'development'

  return {
    isWebtest,
    isDev
  }
}