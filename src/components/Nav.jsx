import { Link } from "react-router-dom";
const Nav = () => {
    return (
       
               <header className=" app header">
          <div className="container">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to="/">Shop</Link>
                    </li>
                    <li className="header__nav-item"> 
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>

            </nav>

          </div>

       </header>
        
       
    )
}

export default Nav