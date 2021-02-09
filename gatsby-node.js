const path = require(`path`);
const slugify = require(`slugify`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postLayout = path.resolve(`src/layouts/postLayout.js`);
  const postsQuery = await graphql(`
    query {
      graphcms {
        posts(stage: PUBLISHED) {
          id
          title
          category
          level
          body {
            html
            text
          }
          excerpt
          icon {
            url
          }
          tags {
            value
          }
        }
      }
    }
  `);

  postsQuery.data.graphcms.posts.forEach(post => {
    let recommendedPosts = {};
    let postsWithoutCurrent = {};
    const patternCategory = post.category;

    postsWithoutCurrent = postsQuery.data.graphcms.posts.filter(
      el => !(el.id === post.id)
    );

    post.tags.forEach(patternTag => {
      recommendedPosts = postsWithoutCurrent.filter(el => {
        const filteredTags = el.tags.filter(
          tag => tag.value === patternTag.value
        );
        return filteredTags.length > 0 && el.category === patternCategory;
      });
    });

    createPage({
      path: `/${slugify(post.title.toLowerCase())}`,
      component: postLayout,
      context: {
        data: post,
        recommendedPosts,
        pathname: `/${slugify(post.title.toLowerCase())}`,
      },
    });
  });
};
