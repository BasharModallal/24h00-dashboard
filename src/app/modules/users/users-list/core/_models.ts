import {ID, Response} from "../../../../../_metronic/helpers";

export type User = {
  id?: ID
  first_name?: string
  last_name?: string
  username?: string
  avatar?: string
  email?: string
  position?: string
  role?: string
  last_login?: string
  two_steps?: boolean
  created_at?: string
  online?: boolean
  blacklisted?: number
  blacklisted_reason?: string
  password?: string
  changepassword?: string
  initials?: {
    label: string
    state: string
  }
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  first_name: '',
  last_name: '',
  username: '',
  email: '',
}
