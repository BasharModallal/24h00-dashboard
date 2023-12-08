import {ID, Response} from '../../../../_metronic/helpers'

export type Category = {
  id?: ID
  name?: string
  image?: File | null,
  created_at?: string
  updated_at?: string
}

export type CategoriesQueryResponse = Response<Array<Category>>

export const initialCategory: Category = {
  name: 'No Category',
  image: null,
  created_at: "2023-09-21T06:52:25.000000Z",
  updated_at: "2023-09-21T06:52:25.000000Z",
}

export type CategoryResponse = {
  id?: ID
  name?: string
  images?: [string] | [],
  created_at?: string
  updated_at?: string
}

// import {ID, Response} from "../../../../_metronic/helpers";

// export type Website = {
//     id?: ID
//     name?: string
//     url?: string
// }

// export type WebsitesQueryResponse = Response<Array<Website>>

// export const initialWebsite: Website = {
//     name: '',
//     url: '',
// }