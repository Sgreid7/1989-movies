import React, { Component } from 'react'
import styled from 'styled-components'
import Movie from './Movie'
import InputSection from './InputSection'

class MoviesList extends Component {
  state = {
    movies: [],
    search: '',
  }

  onFilterSearch = e => {
    this.setState({
      movies: this.state.movies.filter(
        movie =>
          movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
      ),
      search: e.target.value,
    })
  }

  async componentDidMount() {
    try {
      const result = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=88859848d50c55f203e248f5a006929e&language=en-US&primary_release_year=1989&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      )
      const movies = await result.json()

      this.setState({
        movies: movies.results,
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <>
        <InputSection
          type="search"
          onChange={this.onFilterSearch}
          name="Search"
          value={this.state.search}
          placeholder="Search for a movie..."
        />
        <MovieGrid>
          {this.state.movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MovieGrid>
      </>
    )
  }
}

export default MoviesList

export const MovieGrid = styled.section`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1rem;
`
