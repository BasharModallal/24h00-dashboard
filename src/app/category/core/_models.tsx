import {ID, Response} from '../../../../_metronic/helpers'

export type Category = {
  id?: ID
  name?: string
}

export type CategoriesQueryResponse = Response<Array<Category>>

export interface CategoryModel {
    name: string
}
  