import { FilterValues, FILTERS_BUTTONS } from '../constants'

interface Props {
  filtersSelected: FilterValues
  onFiltersChange: (filtersSelected: FilterValues) => void
}

export const Filters: React.FC<Props> = ({ filtersSelected, onFiltersChange }) => {
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
          const isSelected = key === filtersSelected
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a
                className={className}
                href={href}
                onClick={() => onFiltersChange(key as FilterValues)}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
