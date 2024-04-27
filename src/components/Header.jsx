import { Link } from "react-router-dom";
import "../style.css";
import useShop from "../ShopContext";


const Header = () => {

    const { products } = useShop();
    

    return (
        <div className="menu">
            <Link to="/" className="logo">
                Reactify app
            </Link>

        <div className="Links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
            </div>
            <Link to="/cart">
                <span className="cart">{products.length}</span>
            </Link>

        </div>
    );
};

export default  Header;