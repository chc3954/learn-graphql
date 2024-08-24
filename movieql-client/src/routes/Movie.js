import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOIVE = gql`
  query getMoive($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

export default function Movie() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_MOIVE, {
    variables: {
      movieId: id,
    },
  });

  if (error) return <h1>Error</h1>;

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return <div>{data.movie.title}</div>;
  }
}
