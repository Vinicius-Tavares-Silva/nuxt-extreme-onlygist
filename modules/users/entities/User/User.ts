import type { Address } from "../Address/Address"

export interface User {
  id: string
  avatarUrl: string
  username: string
  name: string
  site?: string
  bio?: string
  phone?: string
  address: Address
  createdAt: Date
}