import List from "./List";
import Repos from './Repos';
import { useEffect } from "react";
export default function Box({ query, userInfo, userRepos, setUserRepos }) {
    const avatarStyle = { height: '5rem', width: '5rem' }

    useEffect(() => {
        const controller = new AbortController()
        async function fetchUser() {
            const res = await fetch(`https://api.github.com/users/${query}/repos`);
            const userReposData = await res.json();
            console.log(userReposData);
            setUserRepos(userReposData);
        }
        if (query !== '') fetchUser()
        return function () {
            return controller.abort()
        }

    }, [query, setUserRepos])

    return (<>
        <div className='userinfo'>
            <div className=''>
                <figure>
                    <img className='user-avatar' style={avatarStyle} src={userInfo.avatar_url} alt=''></img>
                    <figcaption>
                        <h2 className='user-name'>{userInfo['login']}</h2>
                    </figcaption>
                </figure>

            </div>
            <List followers={userInfo.followers} following={userInfo.following} location={userInfo.location} />

        </div>
        <Repos repos={userRepos} />
    </>
    )
}
