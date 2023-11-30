
export default function Hero({ children }) {
    return (
        <header style={{ textAlign: 'center' }} className='hero'>
            <div className='container'>
                {children}
            </div>
        </header>)
}