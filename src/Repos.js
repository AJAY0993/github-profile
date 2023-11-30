import Repo from './Repo'

export default function Repos({ repos }) {

    const style = {
        display: 'flex',
        gap: '2em',
        flexWrap: 'wrap',
    }
    return (
        <ul style={style}>
            {repos.slice(0, 10).map(repo => <Repo repo={repo} />)}
        </ul>
    )
}