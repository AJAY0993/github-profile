import { useEffect } from "react";
export default function Main({ query, setUserInfo, setUserRepos, children, setLoading }) {
    useEffect(() => {
        const controller = new AbortController()
        async function fetchUser() {
            setLoading(true)
            const res = await fetch(`https://api.github.com/users/${query}`);
            const userData = await res.json();
            setUserInfo(userData);
            setLoading(false)
        }
        if (query !== '') fetchUser()
        return function () {
            return controller.abort()
        }
    }, [query, setUserInfo, setLoading, setUserRepos])

    return (
        <main>
            <div className='container'>
                {children}
            </div>
        </main>
    )
}
