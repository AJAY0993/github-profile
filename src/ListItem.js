export default function ListItem({ key, value, children }) {
    const style = {
        backgroundColor: '#111729',
        padding: '1em .5em',
        borderRadius: '.5em',
        fontWeight: '500'
    }
    return (
        <li style={style}>
            {children}
        </li>
    )
}
