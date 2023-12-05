import { ID, Response } from '../../../../../_metronic/helpers'
export type Brand = {
  id?: ID
  name?: string
  image?: File | null,
  created_at?: string
  updated_at?: string
  view_count?: number

}

export type BrandsQueryResponse = Response<Array<Brand>>

export const initialBrand: Brand = {
  image: null,
  name: 'No Brand',
  created_at: "2023-09-21T06:52:25.000000Z",
  updated_at: "2023-09-21T06:52:25.000000Z",
  view_count: 1
}


export type BrandResponse = {
  id?: ID
  name?: string
  images?: [string] | [],
  created_at?: string
  updated_at?: string
  view_count?: number

}