import { UserContent } from "./DataModel";

export const userContent: UserContent = 
{
    contentTypes: [
        {
            type: "Work",
            content: [
                {
                    img: {
                        path: "./assets/microsoft.png",
                        title: "Microsoft"
                    },
                    description: {
                        title: "Microsoft",
                        description: "Currently living in Seattle while working on the Excel team at Microsoft, helping to develop a better charting experience. Good things to come!"
                    }
                },
                {
                    img: {
                        path: "./assets/datanautix.png",
                        title: "Datanautix"
                    },
                    description: {
                        title: "Datanautix",
                        description: "Worked with neuro-linguistic programming and principles of machine learning to find insight in open comments. Developed interactive graphs and charts using d3. Researched and analyzed multiple Sentiment Analysis APIs using scikit-learn and found optimal Sentiment classifier by combining mulitple APIs."
                    }
                },
                {
                    img: {
                        path: "./assets/sf.png",
                        title: "State Farm Insurance"
                    },
                    description: {
                        title: "State Farm Insurance",
                        description: "Worked with an agile team on a Proactive Messaging project developed in Java. Completed an automated test using JBehave and Selenium web drivers that scripted test scenarios of said project, shortening the testing time by 60%."
                    }
                }
            ]
        },
        {
            type: "Personal Projects",
            content: [
                {
                    img: {
                        path: "./assets/musicalNote.svg",
                        title: "Harmonic Visualizer"
                    },
                    description: {
                        title: "Harmonic Visualizer",
                        description: `When I first learned about the harmonic series, I had a hard time understanding how it worked and why it produces the tones it does. I created this website with React and Typescript, and using the Tone.js package, to visualize how the harmonic series works.`
                    },
                    links: [
                        {
                            title: 'Check it out',
                            url: 'https://davidisrawi.github.io/harmonic-visualizer/'
                        }
                    ]
                },
                {
                    img: {
                        path: "./assets/datalions.png",
                        title: "Datalions"
                    },
                    description: {
                        title: "Datalions",
                        description: `Datalions is a cross-platform application that helps the fitness team and coaches of the Orlando City Soccer Club predict the risk of soft-tissue injury for players using machine learning and data visualization. It also serves as an injury log system for the team.
    
                        This project was sponsored by the Orlando City Soccer Club.`
                    }
                },
                {
                    img: {
                        path: "./assets/outflu.png",
                        title: "Outfluenza"
                    },
                    description: {
                        title: "Outfluenza",
                        description: 'Outfluenza is a React Progressive Web Application that leverages four separate data sources for flu information including the Center for Disease Control and Prevention (CDC), Google Trends, Twitter, and a query for local doctors. Outfluenza focuses on small communities where news sources are not enough to determine the severity of the disease in their area with certainty. For this project, we aimed for minimalism and crowdsourcing.'
                    },
                    links: [
                        {
                            title: "GitHub",
                            url: "https://github.com/cancanf3/outfluenza"
                        },
                        {
                            title: "Devpost",
                            url: "https://devpost.com/software/outfluenza-xmtew3"
                        },
                    ]
                },
                {
                    img: {
                        path: "./assets/drakefeels.png",
                        title: "All The Feels"
                    },
                    description: {
                        title: "AllTheFeels",
                        description: `Amazon's Alexa skill prompts the user how his/her day is going, then it curates a list of regularly-updated Spotify playlists tailored to the person's mood. Worked on incorporating the AlchemyAPI to the response from Alexa, then sorting a list of playlist in accordance to the sentiment in the person's day.`
                    },
                    links: [
                        {
                            title: "GitHub",
                            url: "https://github.com/DavidIsrawi/AllTheFeels"
                        },
                        {
                            title: "Devpost",
                            url: "https://devpost.com/software/allthefeels-9mdqs8"
                        },
                    ]
                },
                {
                    img: {
                        path: "./assets/summary.png",
                        title: "All The Feels"
                    },
                    description: {
                        title: "SummarizeMe",
                        description: `Receives an article (or any body of text) and produces a summary using the sentences with the most informational value. Written in Python and the NLTK library, it's made into a RESTful API using Flask and deployed to AWS Elastic Beanstalk. The client is written with Angular and deployed using GitHub Pages. Project inspired by the auto TL;DR bot used in many subreddits.`
                    },
                    links: [
                        {
                            title: "GitHub",
                            url: "https://github.com/DavidIsrawi/SummarizeMe"
                        },
                        {
                            title: "Check it out",
                            url: "http://summarizeme.surge.sh/"
                        },
                    ]
                },
                {
                    img: {
                        path: "./assets/PopsicleIcon.png",
                        title: "Flavored News"
                    },
                    description: {
                        title: "Flavored News",
                        description: `Website scrapes news articles from multiple reliable prominent sources and categorizes such articles by mood/tone of the information. I developed the Watson® Tone Analyzer processor for the articles, a web scrapper for BBC news, and the website’s CSS using Materialize. Processor and web scrapper coded in Python.`
                    },
                    links: [
                        {
                            title: "GitHub",
                            url: "https://github.com/JoshuaKoh/LaCodingGranja_2016"
                        },
                        {
                            title: "Devpost",
                            url: "https://devpost.com/software/lacodinggranja_2016"
                        },
                    ]
                },
                {
                    img: {
                        path: "./assets/sfreims.png",
                        title: "SFreims"
                    },
                    description: {
                        title: "SFReims",
                        description: `App eases the complexity of a web process to submit reimbursement forms for State Farm® employees. Developed with Ionic and AngularJS (Compatible with iOS and Android). I worked on the code for the ionic framework, and the basis for the AngularJS back end.`
                    }
                }
            ]
        },
        {
            type: "Articles",
            content: [
                {
                    img: {
                        path: "./assets/https.png",
                        title: "HTTPS"
                    },
                    description: {
                        title: "Securing your Website - What, Why, and How of HTTPS",
                        description: `We all know HTTPS is more secured than HTTP (it's in the name). But why is it important? How does it do it? And how can you add it to your website? I wrote this article in the process of learning all of this in order to apply it to my (this) website.`
                    },
                    links: [
                        {
                            title: "Article",
                            url: "https://dev.to/davidisrawi/securing-your-website-in-4-minutes---what-why-and-how-of-https-3kcm"
                        }
                    ]
                },
                {
                    img: {
                        path: "./assets/summary.png",
                        title: "Summary"
                    },
                    description: {
                        title: "Build a quick Summarizer with Python and NLTK",
                        description: 'If you are interested in Data Analytics, you will find learning about Natural Language Processing very useful. For this article, we use the NLTK library suite to build a text summarizer in Python.'
                    },
                    links: [
                        {
                            title: "GitHub",
                            url: "https://github.com/DavidIsrawi/SummarizeMe"
                        },
                        {
                            title: "Article",
                            url: "https://dev.to/davidisrawi/build-a-quick-summarizer-with-python-and-nltk"
                        }
                    ]
                },
                {
                    img: {
                        path: "./assets/mls.png",
                        title: "MLS Logo"
                    },
                    description: {
                        title: "Quick Analysis on MLS Players' Salary Growth in the last Decade",
                        description: 'Since 2007, MLS has been increasing its popularity -- bringing more revenue to the organization and an opportunity to increase the budget for each team. Here is a quick analysis in the salary growth of players in the last decade.'
                    },
                    links: [
                        {
                            title: "Analysis Repo",
                            url: "https://github.com/DavidIsrawi/SalariesMLS"
                        },
                        {
                            title: "Visuals Repo",
                            url: "https://github.com/DavidIsrawi/SalariesMLS-Visuals"
                        },
                        {
                            title: "Article",
                            url: "http://mlsanalytics.surge.sh/"
                        }
                    ]
                }
            ]
        },
        {
            type: "Fun",
            content: [
                {
                    img: {
                        path: "./assets/dahveed.png",
                        title: "Dahveed"
                    },
                    description: {
                        title: "Twitch Stream",
                        description: 'I stream video games (mostly Super Smash Bros. Ultimate) and programming projects. I use Twitch as a way for me to learn and practice on the things that I want to work on bettering.'
                    },
                    links: [
                        {
                            title: "Check out my channel!",
                            url: "https://www.twitch.tv/dahveed_iy"
                        }
                    ]
                },
                {
                    img: {
                        path: "./assets/pgstats.svg",
                        title: "PG Stats"
                    },
                    description: {
                        title: "Competitive Player for Super Smash Bros. Ultimate",
                        description: `I have been working on getting better as a competitive player since the COVID pandemic started. Up until recently I had only participated in free online tournaments and local hangouts for practice, but now I have started to go to local tournaments. I haven't yet won a tourney, but soon it will happen!`
                    },
                    links: [
                        {
                            title: "Player stats",
                            url: "https://www.pgstats.com/ultimate/player/Dahveed?id=S1805146"
                        }
                    ]
                }
            ]
        },
    ]
}