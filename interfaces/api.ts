export interface MoviesResp {
  Search: MovieSearch[];
  totalResults: string;
  Response: string;
}

export interface MovieSearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MovieType;
  Poster: string;
}

export enum MovieType {
  Movie = "movie",
  Series = "series",
  Episode = "episode",
}

export interface MovieResp extends MovieSearch {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  // Custom
  favorite: boolean;
}

export interface Rating {
  Source: string;
  Value: string;
}
