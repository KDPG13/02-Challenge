const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Wow! I didn't know about that. Thanks!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "TEXT is another useful data type for entering long form text data.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Ah, i'm addicted to buying the latest games!",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Now that you reminded me, I'm about to buy VALKYRIE ELYSIUM when it comes out.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Did you know about hashing?",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Yeah! I just learned that it is the conversion of a key or a string of characters into another value. >.< ",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;