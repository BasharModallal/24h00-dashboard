import {ID, Response} from '../../../../_metronic/helpers'

export type Category = {
  id?: ID
  name?: string
  // image?: string
}

export type CategoriesQueryResponse = Response<Array<Category>>

export interface CategoryModel {
  name: string
  // image: string
}
export const initialCategory: Category = {
  name: '',
  // image: 'avatars/300-6.jpg',
}
