import {useSelector, useDispatch} from 'react-redux'
import { JobPosition } from './JobPosition';
import {selectVisiblePositions} from '../store/positions/position-selector'

import {addFilter} from '../store/filters/filters-actions'
import {selectAllFilters} from '../store/filters/filters-selectors'

const JobList = () => {
  const currentFilters = useSelector(selectAllFilters)
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters))
  const dispatch = useDispatch()

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter)) 
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
        key={item.id}
        handleAddFilter={handleAddFilter}
        {...item} />
      ))}
    </div>
  )
}

export {JobList};