import { Array, Null, Number, Record, Static, String } from 'runtypes'

export const searchContract = Record({
  id: Number,
  name: String,
  alternativeName: String,
  year: Number,
  shortDescription: String,
  movieLength: Number,
  ageRating: Number.Or(Null),
  poster: Record({ url: String.Or(Null) }),
  rating: Record({
    kp: Number,
    imdb: Number,
    filmCritics: Number,
  }),
  genres: Array(Record({ name: String })),
  internalRating: Number.optional(),
})

export type SearchResult = Static<typeof searchContract>
