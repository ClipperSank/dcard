import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CLIENT_ID = '09af2d6d9ffc2387f4f2'
const SignIn = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const codeParam = urlParams.get('code')
        console.log(codeParam)
    })

    const logInWithGithub = () => {
        window.location.assign('https://github.com/login/oauth/authorize?client_id=' + CLIENT_ID )
    }

    return(
        <>
        <p>
        Well, hello there!
        </p>
        <p>
            We're going to now talk to the GitHub API. Ready?
            <span style={{color:'blue', cursor:'pointer'}} onClick={logInWithGithub}> Click here </span>
            to begin!
        </p>
        <p>
            If that link doesn't work, remember to provide your own <a href="/apps/building-oauth-apps/authorizing-oauth-apps/">Client ID</a>!
        </p>
    </>
    )
}

export default SignIn