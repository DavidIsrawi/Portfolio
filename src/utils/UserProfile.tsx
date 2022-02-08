import { UserProfile } from "./DataModel";

const about: JSX.Element = (
    <div>
        <p className="mb-5">
            I currently work as a Software Engineer at <strong><a className='imply_hyperlink' href='https://twitter.com/msexcel'>@MicrosoftExcel</a></strong>. I enjoy working on projects that regard unexplored data — mostly surrounding <a className='imply_hyperlink' href='https://davidisrawi.github.io/harmonic-visualizer/'>music</a> and <a className='imply_hyperlink' href='http://mlsanalytics.surge.sh/'>sports</a>.
        </p>
        <p className="mb-5">
        Although I work as a fullstack developer, I invest most of my time learning and developing on front-end.
        </p>
        <p className="mb-5">
        On my free time, you can catch me <a className='imply_hyperlink' href='https://www.twitch.tv/dahveed_iy'>streaming</a>, playing Super Smash Bros., or playing soccer (not the best sport for Seattle's weather).
        </p>
    </div>
);

export const userProfile: UserProfile = {
    name: "David Israwi",
    about: about,
    description: "Welcome! This is my new page, I'm learning how to program with Tailwind CSS",
    email: "davidisrawi@gmail.com",
    img: './assets/ProfilePic.jpg',
    resume: 'https://drive.google.com/file/d/0BxHec4yAhjE_TExsYjlRbUcyLVU/view?usp=sharing&resourcekey=0-XjRa57thfhaPssVyodLjjQ'
}
