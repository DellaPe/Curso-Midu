export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const // Lo hace solo de lectura

export type FilterValues = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

const HREF_DEFAULT = '#/?filter=' as const

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: { literal: 'Todos', href: `${HREF_DEFAULT}${TODO_FILTERS.ALL}` },
  [TODO_FILTERS.ACTIVE]: { literal: 'Activos', href: `${HREF_DEFAULT}${TODO_FILTERS.ACTIVE}` },
  [TODO_FILTERS.COMPLETED]: { literal: 'Completados', href: `${HREF_DEFAULT}${TODO_FILTERS.COMPLETED}` }
} as const
