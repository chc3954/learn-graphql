import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_MOVIES = gql`
  {
    allMovies {
      id
      title
    }
  }
`;

export default function Movies() {
  const { data, loading, error } = useQuery(GET_MOVIES);

  if (error) return <h1>Error</h1>;

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <ul>
        <h1>Movies</h1>
        {data.allMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
