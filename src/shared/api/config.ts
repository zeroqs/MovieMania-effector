export const baseUrl = (url?: string) => {
  return `${import.meta.env.VITE_BASE_API_URL}${url}`
}
