import { UserContent } from "./DataModel";
import { externalLinks } from "./ExternalLinks";

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
            description: "Currently living in Seattle while working on the M365 Copilot App at Microsoft, focusing on different Canvas experiences such as the Notebooks and Pages modules. Before that, I worked on the Loop App team as well as the Excel team, helping to develop a better emoji experience, bettering our deployment infrastructure, and developing our charting experience. Good things to come!"
          }
        },
        {
          img: {
            path: "./assets/datanautix.png",
            title: "Datanautix"
          },
          description: {
            title: "Datanautix",
            description: "Worked with neuro-linguistic programming and principles of machine learning to find insight in open comments. Developed interactive graphs and charts using d3. Researched and analyzed multiple Sentiment Analysis APIs using scikit-learn and found the optimal Sentiment classifier by combining multiple APIs."
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
      type: "Projects",
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
              url: externalLinks.harmonicVisualizer
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
              url: externalLinks.outfluenzaRepo
            },
            {
              title: "Devpost",
              url: externalLinks.outfluenzaDevpost
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
            description: `Amazon's Alexa skill prompts the user how his/her day is going, then it curates a list of regularly-updated Spotify playlists tailored to the person's mood. Worked on incorporating the AlchemyAPI to the response from Alexa, then sorting a list of playlists in accordance to the sentiment in the person's day.`
          },
          links: [
            {
              title: "GitHub",
              url: externalLinks.allTheFeelsRepo
            },
            {
              title: "Devpost",
              url: externalLinks.allTheFeelsDevpost
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
              url: externalLinks.summarizeMeRepo
            },
            {
              title: "Check it out",
              url: externalLinks.summarizeMeSite
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
            description: `Website scrapes news articles from multiple reliable prominent sources and categorizes such articles by mood/tone of the information. I developed the Watson® Tone Analyzer processor for the articles, a web scraper for BBC news, and the website’s CSS using Materialize. Processor and web scraper coded in Python.`
          },
          links: [
            {
              title: "GitHub",
              url: externalLinks.flavoredNewsRepo
            },
            {
              title: "Devpost",
              url: externalLinks.flavoredNewsDevpost
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
            description: `App eases the complexity of a web process to submit reimbursement forms for State Farm® employees. Developed with Ionic and AngularJS (Compatible with iOS and Android). I worked on the code for the Ionic framework, and the basis for the AngularJS back end.`
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
            description: `We all know HTTPS is more secure than HTTP (it's in the name). But why is it important? How does it do it? And how can you add it to your website? I wrote this article in the process of learning all of this in order to apply it to my (this) website.`
          },
          links: [
            {
              title: "Article",
              url: externalLinks.secureWebsiteArticle
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
              url: externalLinks.summarizeMeRepo
            },
            {
              title: "Article",
              url: externalLinks.summarizerArticle
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
            description: 'Since 2007, MLS has been increasing its popularity -- bringing more revenue to the organization and an opportunity to increase the budget for each team. Here is a quick analysis of the salary growth of players in the last decade.'
          },
          links: [
            {
              title: "Analysis Repo",
              url: externalLinks.salariesMlsRepo
            },
            {
              title: "Visuals Repo",
              url: externalLinks.salariesMlsVisualsRepo
            },
            {
              title: "Article",
              url: externalLinks.mlsAnalytics
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
            path: "./assets/msslTrophy.png",
            title: "MSSL Cup"
          },
          description: {
            title: "Soccer",
            description: 'When weather permits, I participate in the Seattle and Microsoft soccer leagues. I tend to mostly play during the Spring and Summer, and for the remainder of the year I try to boulder and run instead'
          }
        },
        {
          img: {
            path: "./assets/halfMarathonAustin.png",
            title: "Half-Marathon"
          },
          description: {
            title: "Running",
            description: 'Running has been the most consistent way for me to work out given how easy it is to put on a pair of shoes and start running. So far, I have run a handful of half-marathons and hope to run a full sometime in the future. My goal is not necessarily related to distance, but to lower the body strain needed to run the same distance over and over.'
          },
          links: [
            {
              title: "Strava",
              url: externalLinks.stravaProfile
            }
          ]
        },
        {
          img: {
            path: "./assets/supermajor.png",
            title: "Supermajor.gg"
          },
          description: {
            title: "Competitive Player for Super Smash Bros. Ultimate",
            description: `I have been playing competitively since 2021-2022. I have mostly attended local tournaments, though I also participate in events out of region around twice a year`
          },
          links: [
            {
              title: "Player stats",
              url: externalLinks.superSmashProfile
            }
          ]
        }
      ]
    },
  ]
}
