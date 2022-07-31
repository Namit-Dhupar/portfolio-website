import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://127.0.0.1/wordpress/graphql',
  cache: new InMemoryCache(),
});

export const MainQuery = gql `query NewQuery {
    pages(where: {title: "Main"}) {
      edges {
        node {
          main {
            designation
            name
            tagline
          }
          content
        }
      }
    }
  }`;

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
        altText
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

export const ExtractData = (propType) => {
  return propType?.edges.map(({node}) => node);
}