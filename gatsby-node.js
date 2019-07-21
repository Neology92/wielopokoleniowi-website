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
              body {
                html
                text
              }
              icon {
                url
              }
            }
          }
        }
      }
    }
  `);

  postsQuery.data.graphcms.posts.edges.forEach(post => {
    createPage({
      path: slugify(post.node.title),
      component: postLayout,
      context: {
        data: post.node,
      },
    });
  });
};
