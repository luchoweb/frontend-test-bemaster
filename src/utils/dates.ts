export const getMovieYear = (date: string | number | undefined) => new Date(date ?? "").getFullYear();
