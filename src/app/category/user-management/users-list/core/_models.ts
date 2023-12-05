import {ID, Response} from '../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  name?: string
  image?: any
  initials?: {
    label: string
    state: string
  }
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  image: 'avatars/300-6.jpg',
  name: '',
}
