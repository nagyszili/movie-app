import { gql, useQuery } from '@apollo/client';

export const SEARCH = gql`
  query Search($term: String!) {
    search(term: $term) {
      totalCount
      edges {
        node {
          ... on Movie {
            title
            releaseDate
            budget
          }
        }
      }
    }
  }
`;
export const useSearch = () => useQuery(SEARCH);
