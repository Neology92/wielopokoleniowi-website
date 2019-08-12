const path = require(`path`);
const slugify = require(`slugify`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postLayout = path.resolve(`src/layouts/postLayout.js`);
  const postsQuery = await graphql(`
    {
      graphcms {
        posts: postsConnection(skip: 0, where: { status: PUBLISHED }) {
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
    let edgesWithoutCurrent = {};
    const patternCategory = edge.node.category;

    edgesWithoutCurrent = postsQuery.data.graphcms.posts.edges.filter(
      innerEdge => !(innerEdge.node.id === edge.node.id)
    );

    edge.node.tags.forEach(patternTag => {
      recommendedPostsEdges = edgesWithoutCurrent.filter(innerEdge => {
        const filteredTags = innerEdge.node.tags.filter(
          tag => tag.value === patternTag.value
        );
        return (
          filteredTags.length > 0 && innerEdge.node.category === patternCategory
        );
      });
    });

    createPage({
      path: `/${slugify(edge.node.title.toLowerCase())}`,
      component: postLayout,
      context: {
        data: edge.node,
        recommendedPostsEdges,
        pathname: `/${slugify(edge.node.title.toLowerCase())}`,
      },
    });
  });
};
