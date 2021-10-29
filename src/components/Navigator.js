import { Link } from "react-router-dom"

function Navigation(){
    return (
        <div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </div>
    )
}

export default Navigation