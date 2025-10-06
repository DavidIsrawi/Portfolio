import { UserProfile } from "./DataModel";

const about: JSX.Element = (
    <div>
        <p className="mb-5">
            I currently work as a Software Engineer at Microsoft, developing the <strong><a className='imply_hyperlink' href='https://x.com/copilot/'>M365 Copilot App</a></strong>. I enjoy working on projects that regard unexplored data — mostly surrounding <a className='imply_hyperlink' href='https://davidisrawi.github.io/harmonic-visualizer/'>music</a> and <a className='imply_hyperlink' href='http://mlsanalytics.surge.sh/'>sports</a>.
        </p>
        <p className="mb-5">
        Although I work as a fullstack developer, I invest most of my time learning and developing on front-end.
        </p>
        <p className="mb-5">
        On my free time, you can catch me on a <a className='imply_hyperlink' href='https://www.instagram.com/davidisrawi/'>foodie adventure</a>, playing <a className='imply_hyperlink' href='https://www.supermajor.gg/ultimate/player/Dahveed?id=S1805146'>Super Smash Bros.</a> competitively, or <a className='imply_hyperlink' href='https://www.strava.com/athletes/125204347'>running / playing soccer</a> (not the best sports for Seattle's weather).
        </p>
    </div>
);

export const userProfile: UserProfile = {
    name: "David Israwi",
    about: about,
    description: "Welcome!",
    email: "davidisrawi@gmail.com",
    img: './assets/ProfilePic.jpg',
    resume: 'https://drive.google.com/file/d/0BxHec4yAhjE_TExsYjlRbUcyLVU/view?usp=sharing&resourcekey=0-XjRa57thfhaPssVyodLjjQ'
}
