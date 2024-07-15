import {
  Array,
  Boolean as RunTypeBoolean,
  Literal,
  Null,
  Number,
  Record,
  Static,
  String,
  Union,
} from 'runtypes'

export const movieContract = Record({
  fees: Record({
    world: Record({
      value: Number,
      currency: String,
    }).optional(),
    russia: Record({
      value: Number,
      currency: String,
    }).optional(),
    usa: Record({
      value: Number,
      currency: String,
    }).optional(),
  }).optional(),

  productionCompanies: Array(Record({ name: String })),
  premiere: Record({
    world: String.Or(Null),
    russia: String.Or(Null),
  }),
  slogan: String.Or(Null),
  budget: Record({
    value: Number,
    currency: String,
  }),
  facts: Array(
    Record({ value: String, type: String, spoiler: RunTypeBoolean }),
  ),

  persons: Array(
    Record({
      id: Number,
      name: String.Or(Null),
      description: String.Or(Null),
      photo: String.Or(Null),
    }),
  ),

  similarMovies: Array(
    Record({
      id: Number,
      name: String,
      poster: Record({ url: String }),
      rating: Record({
        kp: Number,
        imdb: Number,
        filmCritics: Number,
      }),
      year: Number,
    }),
  ),

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
  movieLength: Number.Or(Null),
  poster: Record({ url: String.Or(Null) }),
  rating: Record({
    kp: Number,
    imdb: Number,
    filmCritics: Number,
  }),
  genres: Array(Record({ name: String })),
})

export type MoviesListResult = Static<typeof movieContract>
