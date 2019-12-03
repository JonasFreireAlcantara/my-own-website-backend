
const projects = [
    {
        title: 'project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.',
        url: 'github.com/Project1',
    },
    {
        title: 'project 2',
        description: 'description of project 2',
        url: 'github.com/Project2',
    },
    {
        title: 'project 3',
        description: 'description of project 3',
        url: 'github.com/Project3',
    },
];

module.exports = {

    index(req, res) {
        return res.json({ projects: projects });
    }

};
