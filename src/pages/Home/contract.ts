import {
  Array,
  Literal,
  Null,
  Number,
  Record,
  Static,
  String,
  Union,
} from 'runtypes'

export const moviesContract = Record({
  id: Number,
  name: String,
  alternativeName: String.Or(Null),
  type: Union(
    Literal('movie'),
    Literal('tv-series'),
    Literal('cartoon'),
    Literal('anime'),
    Literal('animated-series'),
    Literal('tv-show'),
  ),
  year: Number,
  description: String.Or(Null),
  seriesLength: Number.Or(Null),
  shortDescription: String.Or(Null),
  movieLength: Number.Or(Null),
  backdrop: Record({ url: String.Or(Null) }),
  rating: Record({
    kp: Number,
    imdb: Number,
    filmCritics: Number,
  }),
  genres: Array(Record({ name: String })),
  internalRating: Number.optional(),
})

export type MoviesListResult = Static<typeof moviesContract>
