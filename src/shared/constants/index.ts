export const movieFilterGenreValues = [
  'Фантастика',
  'Боевик',
  'Комедия',
  'Триллер',
  'Документальный',
  'Аниме',
  'Биография',
  'Вестерн',
  'Военный',
  'Криминал',
  'Ужасы',
  'Короткометражка',
  'Мультфильм',
  'Драма',
  'Музыка',
  'Детектив',
] as const

export type GenreType = (typeof movieFilterGenreValues)[number] | ''

export const movieFilterValues = ['По рейтингу', 'По дате выхода']
