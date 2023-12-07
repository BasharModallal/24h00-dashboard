
import clsx from 'clsx'
import { FC } from 'react'
import { Deal, DealResponse } from '../../core/_models'

type Props = {
  deal: DealResponse
}

const DealInfoCell: FC<Props> = ({ deal }) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {deal.images && deal.images.length > 0 ? (
          <div className='symbol-label'>
            <img src={`${deal.images[0]}`} alt={deal.title} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-primary`,
              `text-primary`
            )}
          >
            {deal.title?.substring(0, 2)}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {deal.title}

      </a>
    </div>
  </div>
)

export { DealInfoCell }
