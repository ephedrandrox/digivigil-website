/* This file is imported into the Portfolio Component
to make editing the portfolio page data separate from
the view and allowing portfolioData to be imported,
if needed in other modules.
 */


import React from "react";

let PortfolioData = {
    "projects": [
        {
            "name": "Balek",
            "link": "../balek/",
            "description": "Web Application Framework",
            "technologies": ["JavaScript", "Node.js", "Dojo Toolkit", "MySQL", "Mongo", "HTML", "CSS"],
            "resources": [
                {
                    label: "Git Repo",
                    link: "https://github.com/ephedrandrox/balek.git",
                    icon: require('./images/resources/repo.png')
                },
                {
                    label: "Live",
                    link: "https://balek.digivigil.com/release/",
                    icon: require('./images/resources/demo.png')
                },
                {
                    type: "Video",
                    label: "About",
                    link: "https://resources.digivigil.com/videos/balekAbout.m4v",
                    icon: require('./images/resources/video.png'),
                    poster: "https://resources.digivigil.com/videos/aboutPoster.jpg"
                },
                {
                    type: "Video",
                    label: "Demo",
                    link: "https://resources.digivigil.com/videos/balekDemo.m4v",
                    icon: require('./images/resources/video.png'),
                    poster: "https://resources.digivigil.com/videos/demoPoster.jpg"
                },
                {
                    type: "Video",
                    label: "Deploy",
                    link: "https://resources.digivigil.com/videos/balekDeploy.m4v",
                    icon: require('./images/resources/video.png'),
                    poster: "https://resources.digivigil.com/videos/deployPoster.jpg"
                },
                {type: "local", label: "More", link: "../balek/", icon: require('./images/resources/demo.png')}],
            "thumbImage": require('./images/balek/thumb.jpg')

        },
        {
            "name": "Conspiron",
            "link": "https://www.conspiron.com/",
            "description": "Channel Based Chat Application",
            "technologies": ["JavaScript", "PHP", "Dojo Toolkit", "Vue.js", "MySQL", "HTML", "CSS"],
            "resources": [{
                label: "Git Repo",
                link: "https://github.com/ephedrandrox/conspiron-logo.git",
                icon: require('./images/resources/repo.png')
            },
                {label: "Live", link: "https://www.conspiron.com/", icon: require('./images/resources/demo.png')},
                {
                    type: "Video",
                    label: "About",
                    link: "https://resources.digivigil.com/videos/conspironAbout.m4v",
                    icon: require('./images/resources/video.png'),
                    poster: "https://resources.digivigil.com/videos/aboutPoster.jpg"
                }],
            "thumbImage": require('./images/conspiron/thumb.jpg')
        },
        {
            "name": "Guestbook Balek Module",
            "link": "https://guestbook.digivigil.com/release/",
            "description": "Guestbook Module For Balek",
            "technologies": ["JavaScript", "Dojo Toolkit", "HTML", "CSS"],
            "resources": [{
                label: "Git Repo",
                link: "https://github.com/ephedrandrox/balek/tree/master/src/balek-modules/digivigil-www/guestbook",
                icon: require('./images/resources/repo.png')
            },
                {
                    label: "Live",
                    link: "https://guestbook.digivigil.com/release/",
                    icon: require('./images/resources/demo.png')
                },
                {
                    type: "Video",
                    label: "About",
                    link: "https://resources.digivigil.com/videos/guestbookAbout.m4v",
                    icon: require('./images/resources/video.png'),
                    poster: "https://resources.digivigil.com/videos/aboutPoster.jpg"
                }],

            "thumbImage": require('./images/guestbook/thumb.jpg')
        },
        {
            "name": "Flower Of Life Web Animation",
            "link": "https://resources.digivigil.com/fol/",
            "description": "Animated Web Background",
            "technologies": ["JavaScript", "Dojo Toolkit", "HTML", "CSS"],
            "resources": [{
                label: "Git Repo",
                link: "https://github.com/ephedrandrox/folWebination.git",
                icon: require('./images/resources/repo.png')
            },
                {
                    label: "Larger",
                    link: "https://resources.digivigil.com/fol/larger.html",
                    icon: require('./images/resources/demo.png')
                },
                {
                    label: "Smaller",
                    link: "https://resources.digivigil.com/fol/smaller.html",
                    icon: require('./images/resources/demo.png')
                }],

            "thumbImage": require('./images/fol/folthumb.jpg')
        },
        {
            "name": "wssProxy",
            "description": "Simple JavaScript Secure Websocket Proxy",
            "technologies": ["JavaScript", "Node.js", "WebSockets"],
            "link": "https://github.com/ephedrandrox/wssProxy.git",
            "resources": [{
                label: "Git Repo",
                link: "https://github.com/ephedrandrox/wssProxy.git",
                icon: require('./images/resources/repo.png')
            }],
            "thumbImage": require('./images/wssProxy/thumb.png')

        },

        {
            "name": "Flower Of Life ScreenSaver",
            "description": "Animated Flower Of Life Screensaver For Mac OS X",
            "technologies": ["MacOS", "Objective-C", "Metal"],
            link: "https://github.com/ephedrandrox/folScreenSaver.git",
            "resources": [{
                label: "Git Repo",
                link: "https://github.com/ephedrandrox/folScreenSaver.git",
                icon: require('./images/resources/repo.png')
            }
            ],
            "thumbImage": require('./images/fol/thumb.jpg')

        },
        {
            "name": "Digivigil Website",
            "description": "React Framework SPA",
            "technologies": ["JavaScript", "React Framework", "Webpack", "HTML", "CSS"],
            link: "https://github.com/ephedrandrox/digivigil-website.git",
            "resources": [{
                label: "Git Repo",
                link: "https://github.com/ephedrandrox/digivigil-website.git",
                icon: require('./images/resources/repo.png')
            }
            ],
            "thumbImage": require('./images/digivigil/thumb.jpg')

        },
        {
            "name": "Colive",
            "description": "Dashboard Front End For Microsoft Documents",
            "technologies": ["JavaScript", "Node.js", "Dojo Toolkit", "ActiveX"],
            "link": "https://resources.digivigil.com/videos/coliveAbout.m4v",
            "resources": [{
                type: "Video",
                label: "About",
                link: "https://resources.digivigil.com/videos/coliveAbout.m4v",
                icon: require('./images/resources/video.png'),
                poster: "https://resources.digivigil.com/videos/aboutPoster.jpg"
            }],
            "thumbImage": require('./images/colive/thumb.jpg')

        },
        {
            "name": "Diaplode",
            "description": "Web App Interface Design Experiment",
            "technologies": ["JavaScript", "Dojo Toolkit", "PHP", "HTML", "CSS"],
            "link": "https://resources.digivigil.com/videos/diaplodeAbout.m4v",
            "resources": [
                {
                    type: "Video",
                    label: "About",
                    link: "https://resources.digivigil.com/videos/diaplodeAbout.m4v",
                    icon: require('./images/resources/video.png'),
                    poster: "https://resources.digivigil.com/videos/aboutPoster.jpg"
                }],
            "thumbImage": require('./images/diaplode/thumb.jpg')
        }
    ]
}

export default PortfolioData;
