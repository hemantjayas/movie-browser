export const homeMovieApi = `https://api.themoviedb.org/3/movie/popular?api_key=c69ba7ccef2dce029abdb736f29f9ecd&language=en-US&page=1`

export const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=SEARCH_QUERY&page=PAGE_NUMBER
`

export const filterApi = `https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=en-US&page=PAGE_NUMBER&with_genres=GENRE_ID&primary_release_date.gte=START_DATE&primary_release_date.lte=END_DATE&vote_average.gte=MIN_RATING&vote_average.lte=MAX_RATING
`