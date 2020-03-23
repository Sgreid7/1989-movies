// import React, { Component } from 'react'
// import { MovieGrid } from './MoviesList'
// import MoviesList from './MoviesList'
// import Movie from './Movie'

// class Filter extends Component {
//   state = {
//     search: '',
//   }

//   onFilterSearch = e => {
//     this.setState({
//       search: e.target.value,
//     })
//   }

//   render() {
//     let filteredMovies = this.props.movies.filter(movie => {
//       return (
//         movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
//         -1
//       )
//     })
//     return (
//       <>
//         <label htmlFor="search">Search</label>
//         <input
//           type="text"
//           onChange={this.onFilterSearch}
//           name="search"
//           value={this.state.search}
//           placeholder="Search for a movie..."
//         />
//         <MovieGrid>
//           {filteredMovies.map(movie => (
//             <Movie key={movie.id} movie={movie} />
//           ))}
//         </MovieGrid>
//       </>
//     )
//   }
// }

// export default Filter
