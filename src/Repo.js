export default function Repo({ repo }) {

    const style = {
        background: 'rgb(17,23,41)',
        background: ' linear-gradient(62deg, rgba(17,23,41,1) 0%, rgba(29,27,72,1) 63%)',
        width: '300px',
        borderRadius: '1em',
        padding: '1em'
    }
    return (
        <div style={style} className="repo">
            <h3 className="repo-name">{repo.name}</h3>
            <p>{repo.description}</p>
            <ul>
                <li>
                    <i class="fa-solid fa-code-fork"></i>{repo.forks}
                </li>
                <li>
                    <i class="fa-regular fa-star"></i>{repo.stars}
                </li>
                <li>

                </li>
            </ul>
        </div>
    )
}