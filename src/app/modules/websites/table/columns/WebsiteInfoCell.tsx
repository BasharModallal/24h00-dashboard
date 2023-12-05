
import {FC} from 'react'
import {Website} from '../../core/_models'

type Props = {
  website: Website
}

const WebsiteInfoCell: FC<Props> = ({website}) => (
  <div className='d-flex align-items-center'>
    <div className='d-flex flex-column'>
      <a href={website.url} className='text-gray-800 text-hover-primary mb-1'>
        {website.name}
      </a>
    </div>
  </div>
)

export {WebsiteInfoCell}
