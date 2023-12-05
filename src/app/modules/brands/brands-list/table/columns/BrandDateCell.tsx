
import clsx from 'clsx'
import { FC } from 'react'
import { toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import { Brand } from '../../core/_models'
import dayjs from 'dayjs'

type Props = {
    brand: Brand
}

const BrandDateCell: FC<Props> = ({ brand }) => (
    <div className='d-flex align-items-center'>
        <div className=''>
            {dayjs(brand.created_at).format('YYYY-MM-DD HH:mm A')}
        </div>
    </div>
)

export { BrandDateCell }
