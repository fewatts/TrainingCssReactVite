import "./CustomLinks.css";

export function CustomLinks(){
    return(
        <>
            <h1>Customizing links</h1>
            <ul>
                <li><a href="https://github.com/fewatts" target="blank">Github repository</a></li>
                <li><a href="https://www.linkedin.com/in/fernando-alves-de-paula-85091716b" target="blank" className="special">Linkedin Profile</a></li>
                <li><a href="https://soundcloud.com/user-831177117" target="blank">SoundCloud repository</a></li>
            </ul>
        </>
    );
}