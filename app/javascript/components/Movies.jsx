// import { Table, message, Popconfirm } from "antd";
import React from "react";
// import AddMovieModal from "./AddMovieModal";

class Movies extends React.Component {
  columns = [

    {
      title: "Name",
      dataIndex: "name",
      key: "price",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

  ];

  state = {
    movies: [],
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    const url = "api/v1/movies/index";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        data.forEach((movie) => {
          const newEl = {
            key: movie.id,
            id: movie.id,
            name: movie.brand,
            price: movie.price,

          };

          this.setState((prevState) => ({
            movies: [...prevState.movies, newEl],
          }));
        });
      })
      .catch((err) => message.error("Error: " + err));
  };

  reloadMovies = () => {
    this.setState({ movies: [] });
    this.loadMovies();
  };

  deleteMovie = (id) => {
    const url = `api/v1/movies/:id/${id}`;

    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          this.reloadMovies();
          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => message.error("Error: " + err));
  };

  render() {
    return (
      <>
        <Table
          className="table-striped-rows"
          dataSource={this.state.movies}
          columns={this.columns}
          pagination={{ pageSize: 5 }}
        />

        <AddBeerModal reloadMovies={this.reloadMovies} />
      </>
    );
  }
}

export default Movies;
