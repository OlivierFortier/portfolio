// module.exports = {
//     images: {
//       domains: ['media.graphcms.com', 'images.pexels.com'],
//     },
//   }

const withTM = require('next-transpile-modules')(['@react-three/drei', 'three', 'react-spring/three'])

module.exports = withTM({
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com', 'images.pexels.com'],
  },
});
