import { ApolloClient, InMemoryCache, gql, useMutation } from "@apollo/client";

// const defaultOptions = {
//   watchQuery: {
//     fetchPolicy: 'no-cache',
//     errorPolicy: 'ignore',
//   },
//   query: {
//     fetchPolicy: 'no-cache',
//     errorPolicy: 'all',
//   },
// }
export const client = new ApolloClient({
  uri: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  //defaultOptions: defaultOptions
});

export const MainQuery = gql`
  query NewQuery {
    pages(where: { title: "Main" }) {
      edges {
        node {
          main {
            designation
            name
            tagline
          }
          content
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

export const AboutQuery = gql`
query NewQuery {
  pages(where: {title: "About"}) {
    edges {
      node {
        content
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}`;

export const SkillQuery = gql`
query NewQuery {
  posts(where: {categoryName: "Skills"}) {
    edges {
      node {
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}`;

export const ContactQuery = gql`
query NewQuery {
  posts(where: {categoryName: "Social"}) {
    edges {
      node {
        title
        profileLink {
          link
        }
      }
    }
  }
}`;

export const MediaQuery = gql`
query NewQuery {
  mediaItems {
    edges {
      node {
        mediaItemUrl,
        mediaType,
        altText,
        title
      }
    }
  }
}`;

export const ExperienceQuery = gql`
query NewQuery {
  posts(where: {categoryName: "Experience"}) {
    edges {
      node {
        title
        content
      }
    }
  }
}`;

export const ProjectQuery = gql`
query NewQuery {
  posts(where: {categoryName: "Project"}) {
    edges {
      node {
        title
        slug
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        projectData {
          skills
        }
      }
    }
  }
}`;

// const TOGGLE_SENDMAIL = gql`
//   mutation MyMutation($body: String!, $from: String!, $subject: String!) {
//   sendEmail(input: {body: $body, from: $from, subject: $subject}) {
//     sent
//   }
// }
//   `;

//  const [toggleSendMail] = useMutation(TOGGLE_SENDMAIL, {client: client});

//  export const sendMail = (formData) => {
//   toggleSendMail({
//     variables: formData,
//     optimisticResponse: true,
//   });
// };

export async function sendMail(formData) {
	const data = await client.mutate({
    mutation: gql`
    mutation MyMutation($body: String!, $from: String!, $subject: String!) {
        sendEmail(input: {body: $body, from: $from, subject: $subject}) {
          sent
        }
      }
    `,
    variables: formData 
 })
return data;
}

export const ExtractData = (propType) => {
  return propType?.edges?.map(({node}) => node);
}

export const addBrTagOnParagraphClose = (item) => {
  return item?.replace(/<\/p>/g, "</p><br />")
}