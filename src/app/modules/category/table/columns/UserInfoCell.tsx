
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Category} from '../../core/_models'

type Props = {
  category: Category
}

const UserInfoCell: FC<Props> = ({category}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {/* {category.name} */}
      </a>
    </div>
  </div>
)

export {UserInfoCell}
