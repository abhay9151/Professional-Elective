export default function Header(props)
{
    return (
        <div>
            <h1>{props.title}</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">Portfolio</a>
            </nav>
        </div>
    )
}