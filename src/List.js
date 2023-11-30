import ListItem from './ListItem'
export default function List({ followers, following, location = 'N/A' }) {
    return (
        <ul className='userffl'>
            <ListItem key={'followers'}>
                <span classNamen='key'> followers </span> | <span>{followers}</span>
            </ListItem >
            <ListItem key={'following'}>
                <span className='key'> following</span> | <span>{following}</span>
            </ListItem>
            <ListItem key={'location'}>
                <span className='key'> location </span> |  <span>{location}</span>
            </ListItem>
        </ul>
    )
}