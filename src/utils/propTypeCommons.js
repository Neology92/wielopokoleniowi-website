import PropTypes from 'prop-types';

const propTypeCommons = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    body: PropTypes.shape({
      html: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    excerpt: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default propTypeCommons;
