const { Post } = require('../models');
const postData = [
    {
        title: "Instagram Stories under 60 seconds are no longer broken up into clips!",
        post_content: "Instagram is rolling out the ability for users to upload longer uninterrupted Stories, the social network.",
        user_id: 3
    },
    {
        title: "Youtuer Mr. Beast reaches 176 million subscribers!",
        post_content: " Altogether, MrBeast's subscriber count is slightly more than 176 million across six channels.",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
        post_content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 2

    },
    {
        title: "The 17 most exciting video game releases of fall 2022",
        post_content: "Despite numerous delays, the fall video game release schedule still holds plenty of promise. Highly anticipated action games are set to arrive alongside deeply engrossing visual novels; turn-based strategy games are looking to avoid a sophomore slump; gods are still trying to be good dads.",
        user_id: 5
    },
    {
        title: "Upcoming Apple Products Guide",
        post_content: "September 2022 - iPhone 14 and iPhone 14 Plus. September 2022 - iPhone 14 Pro and iPhone Pro Max. September 2022 - AirPods Pro 2. September 2022 - Apple Watch Ultra.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;