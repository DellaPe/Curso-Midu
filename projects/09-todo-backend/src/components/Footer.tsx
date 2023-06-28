import { FilterValues } from '../constants'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filtersSelected: FilterValues
  handleFilterChange: (filtersSelected: FilterValues) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({ activeCount = 0, completedCount, filtersSelected, handleFilterChange, onClearCompleted }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong> Pendientes: {activeCount}</strong>
      </span>

      <Filters
        filtersSelected={filtersSelected}
        onFiltersChange={handleFilterChange}
      />

      {
        completedCount > 0 && (
          <button
            className='clear-completed'
            onClick={onClearCompleted}
          >
            Borrar completados
          </button>
        )
      }
    </footer>

  )
}
