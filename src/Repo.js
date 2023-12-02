export default function Repo({ repo }) {

    const style = {
        background: 'rgb(17,23,41)',
        background: ' linear-gradient(62deg, rgba(17,23,41,1) 0%, rgba(29,27,72,1) 63%)',
        width: '300px',
        borderRadius: '1em',
        padding: '1em'
    }

    const liStyle = {
        margin: '1em 0',
    }
    return (
        <div style={style} className="repo">
            <h3 className="repo-name">{repo.name}</h3>
            <p>{repo.description}</p>
            <ul>
                <li style={liStyle}>
                    <i class="fa-solid fa-code-fork"></i>{repo.forks}
                </li>
                <li style={liStyle}>
                    <i class="fa-regular fa-star"></i>{repo.stars}
                </li>
                <li style={liStyle}>
                    updated  {
                        new Date(repo.updated_at).getMonth() === new Date().getMonth() && new Date(repo.updated_at).getYear() === new Date().getYear() ? new Date().getDate() - new Date(repo.updated_at).getDate() + ' days ago' : new Date(repo.updated_at).getYear() === new Date().getYear() ? new Date().getMonth() - new Date(repo.updated_at).getMonth() + ' Months ago' : new Date().getYear() - new Date(repo.updated_at).getYear()}
                </li>
            </ul>
        </div>
    )
}