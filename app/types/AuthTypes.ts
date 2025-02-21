export interface UserData {
  email?: string,
  address?: string,
  name ?: string,
  role?: string
  loggedIn: boolean
}

export interface UserDataPayload {
  email: string,
  address?: string,
  name ?: string,
  role: string
}