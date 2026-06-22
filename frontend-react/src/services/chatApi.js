import { apiClient } from './apiClient'

export async function sendChatMessage(message) {
  const { data } = await apiClient.post('/chat', { message })
  return data
}
