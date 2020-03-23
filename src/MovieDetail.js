import React, { Component } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import { MoviePoster } from './Movie'
import moment from 'moment'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

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

export default MovieDetail

const MovieWrapper = styled.section`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`

const MovieInfo = styled.section`
  background: #111;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > section {
    margin-left: 1.2rem;
  }
  img {
    position: relative;
    top: -5rem;
  }
`
