import axios from "axios";

const { VITE_MOVIES_API_TOKEN: token } = import.meta.env;
const baseURL = "https://api.themoviedb.org/3";

export const getCategories = async () => {
  return axios
    .get(`${baseURL}/genre/movie/list?language=en`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return {
        error: false,
        genres: response.data,
      };
    })
    .catch((error) => {
      return {
        error: error.message,
        genres: [],
      };
    });
};

export const getMoviesByGenre = async (genreId: string | undefined, page: string | undefined) => {
  return axios
    .get(`${baseURL}/list/${genreId}?language=en-US&page=${page ?? 1}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return {
        error: false,
        movies: response.data,
      };
    })
    .catch((error) => {
      return {
        error: error.message,
        movies: [],
      };
    });
};

export const getMovieInfo = async (movieId: string | undefined) => {
  if (movieId) {
    return axios
      .get(`${baseURL}/movie/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return {
          error: false,
          movie: response.data,
        };
      })
      .catch((error) => {
        return {
          error: error.message,
          movie: {},
        };
      });
  }
};

export const getMovieVideos = async (movieId: string | undefined) => {
  if(movieId) {
    return axios
      .get(`${baseURL}/movie/${movieId}/videos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return {
          error: false,
          videos: response.data,
        };
      })
      .catch((error) => {
        return {
          error: error.message,
          videos: {},
        };
      });
  }
}