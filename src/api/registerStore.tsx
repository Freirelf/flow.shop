import { api } from '@/lib/axios'

export interface RegisterProps {
  nameStore: string
  managerName: string
  email: string
  phone: string
}
export async function registerStore({
  nameStore,
  managerName,
  email,
  phone,
}: RegisterProps) {
  await api.post('/restaurants', {
    nameStore,
    managerName,
    email,
    phone,
  })
}
