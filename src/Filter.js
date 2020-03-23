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

//   onSomethingElse(e) {
//     this.setState({
//       some: e.target.value,
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
//           type="search"
//           onChange={this.onFilterSearch}
//           name="search"
//           value={this.state.search}
//           placeholder="Search for a movie..."
//         />
//       </>
//     )
//   }
// }

// export default Filter
