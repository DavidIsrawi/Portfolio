import { UserProfile } from "./DataModel";
import { externalLinks } from "./ExternalLinks";

const about: JSX.Element = (
    <div>
        <p className="mb-5">
            I currently work as a Software Engineer at Microsoft, developing the <strong><a className='imply_hyperlink' href={externalLinks.m365CopilotApp}>M365 Copilot App</a></strong>. I enjoy working on projects that regard unexplored data — mostly surrounding <a className='imply_hyperlink' href={externalLinks.harmonicVisualizer}>music</a> and <a className='imply_hyperlink' href={externalLinks.mlsAnalytics}>sports</a>.
        </p>
        <p className="mb-5">
        Although I work as a fullstack developer, I invest most of my time learning and developing on front-end.
        </p>
        <p className="mb-5">
    On my free time, you can catch me on a <a className='imply_hyperlink' href={externalLinks.instagram}>foodie adventure</a>, playing <a className='imply_hyperlink' href={externalLinks.superSmashProfile}>Super Smash Bros.</a> competitively, or <a className='imply_hyperlink' href={externalLinks.strava}>running / playing soccer</a> (not the best sports for Seattle's weather).
        </p>
    </div>
);

export const userProfile: UserProfile = {
    name: "David Israwi",
    about: about,
    description: "Welcome!",
    email: "davidisrawi@gmail.com",
    img: './assets/ProfilePic.jpg',
    resume: externalLinks.resume
}
