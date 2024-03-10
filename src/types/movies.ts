export type Genre = {
  id: number;
  name: string;
};

export type Company = {
  id: number;
  logo_path: string;
  name: string;
};

export type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
  tagline: string;
  genres: [Genre];
  production_companies: [Company];
  runtime: number;
};
