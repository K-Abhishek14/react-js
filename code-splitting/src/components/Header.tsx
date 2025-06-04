import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className="row">
            <div className="col-12">
                <header>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </header>
            </div>
        </div>

    )
}

export default Header