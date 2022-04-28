/* eslint-disable linebreak-style */

var mocks = {
  instatags: {
    data: [
      { tags: [] },
      { tags: ['hello'] },
      { tags: ['hello', 'world'] },
      { tags: ['hello', 'world', 'today'] },
    ],
    sortedTags: [
      { tag: 'hello', freq: 3 },
      { tag: 'world', freq: 2 },
      { tag: 'today', freq: 1 },
    ],
  },
};
mocks.underline = {};

module.exports = mocks;
