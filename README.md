# 1989 Movies

A small webpage that showcases some of the most popular movies of 1989. The data for this assignment comes from [The Movie DB](https://www.themoviedb.org/) API.

# Objectives

- Work with API data
- Understand and use React components
- Understand and use "props" in React
- Use Array.prototype.map to render a collection of components in React

# Includes

- [REACT](https://reactjs.org/docs/getting-started.html)
- [FETCH](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [REACT OVERDRIVE](https://github.com/berzniz/react-overdrive)
- [STYLED COMPONENTS](https://styled-components.com/)

# Requirements

- Use the API to fetch the data and render it on the page, rather than the supplied JSON file.
- You should have at least two components; App and Movie.
- Render at least the title, poster image, and plot overview. Feel free to include other pieces of the data.
- Try to capture an 1980's or early 90's aesthetic when you style your page. Have fun with it!

# Featured Code

```JSX
class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    // once the app is added to the page, make an API call to load the data
    try {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=88859848d50c55f203e248f5a006929e&language=en-US`
      )
      const movie = await result.json()

      this.setState({
        movie,
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { movie } = this.state
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <MoviePoster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
            />
          </Overdrive>
          <section>
            <h1>{movie.title}</h1>
            <h3>{moment(movie.release_date).format('MMM Do YY')}</h3>;
            <p>{movie.overview}</p>
          </section>
        </MovieInfo>
      </MovieWrapper>
    )
  }
}
```

# Live Site

- [LIVE SITE](https://1989-movies-sam.netlify.app/)
