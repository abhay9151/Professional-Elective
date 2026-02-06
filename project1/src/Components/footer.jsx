export default function Footer(abhay)
{
    return (
        <div>
            <footer>
                <p>{abhay.year[0]} {abhay.company}</p>
                <p>{abhay.year[0]} {abhay.company.location}</p>
            </footer>
        </div>
    )
}