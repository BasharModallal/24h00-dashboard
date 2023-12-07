import { Column } from 'react-table'
import { DealInfoCell } from './DealInfoCell'
import { DealActionsCell } from './DealActionsCell'
import { DealSelectionCell } from './DealSelectionCell'
import { DealCustomHeader } from './DealCustomHeader'
import { DealSelectionHeader } from './DealSelectionHeader'
import { Deal } from '../../core/_models'
import { DealDateCell } from './DealDateCell'

const dealsColumns: ReadonlyArray<Column<Deal>> = [
  {
    Header: (props) => <DealSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <DealSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <DealCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({ ...props }) => <DealInfoCell brand={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <DealCustomHeader tableProps={props} title='Created Date time' className='min-w-125px' />,
    id: 'created_at',
    Cell: ({ ...props }) => <DealDateCell deal={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <DealCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <DealActionsCell id={props.data[props.row.index].id} />,
  },
]

export { dealsColumns }
