
import clsx from 'clsx'
import { FC } from 'react'
import { toAbsoluteUrl } from '../../../../../../../_metronic/helpers'
import { Brand } from '../../core/_models'

type Props = {
  brand: Brand
}

const BrandInfoCell: FC<Props> = ({ brand }) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {brand.images && brand.images.length > 1 ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${brand.images[0]}`)} alt={brand.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-primary`,
              `text-primary`
            )}
          >
            {brand.name?.substring(0,2)}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {brand.name}
      </a>
    </div>
  </div>
)

export { BrandInfoCell }
