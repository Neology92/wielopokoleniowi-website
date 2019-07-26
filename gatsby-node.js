const path = require(`path`);
const slugify = require(`slugify`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postLayout = path.resolve(`src/layouts/postLayout.js`);
  const postsQuery = await graphql(`
    {
      graphcms {
        posts: postsConnection(skip: 0) {
          edges {
            node {
              id
              title
              category
              level
              body {
                html
                text
              }
              icon {
                url
              }
              tags {
                value
              }
            }
          }
        }
      }
    }
  `);

  postsQuery.data.graphcms.posts.edges.forEach(edge => {
    let recommendedPostsEdges = {};
    const patternCategory = edge.node.category;

    edge.node.tags.forEach(patternTag => {
      recommendedPostsEdges = postsQuery.data.graphcms.posts.edges.filter(
        ({ node }) => {
          return (
            node.category === patternCategory && node.tags.includes(patternTag)
          );
        }
      );
    });

    createPage({
      path: `/${slugify(edge.node.title.toLowerCase())}`,
      component: postLayout,
      context: {
        data: edge.node,
        recommendedPostsEdges,
      },
    });
  });
};
