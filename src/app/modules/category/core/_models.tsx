import {ID, Response} from '../../../../_metronic/helpers'

export type Category = {
  id?: ID
  name?: string
  image?: string
}

export type CategoriesQueryResponse = Response<Array<Category>>

export const initialCategory: Category = {
  name: '',
  image: 'avatars/300-6.jpg',
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