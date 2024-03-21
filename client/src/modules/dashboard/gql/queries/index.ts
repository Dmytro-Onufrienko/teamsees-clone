import { gql } from "@apollo/client";

export const TotalDonationsQuery = gql`
query Donations {
  donations {
      id
      count
      name
      email
      phoneNumber
      team
      message
      createdAt
  }
}
`;