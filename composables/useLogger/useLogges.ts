export function useLogger() {
  const config = useRuntimeConfig()

  const isProd = config.public.env === 'production'

  const logAndTrack = (...args: any[]) => {
    if (isProd) {
      return
    }

    console.log(...args)
  }

  return {
    logAndTrack,
  }
}