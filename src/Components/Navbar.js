import { Link } from "react-router-dom";
import './components.css';
import '../App';

const Navbar = ({count}) => {
  return (
    <div className="all">
      <nav className="navbar">
        <Link className="item" to="/">Landing</Link> 
        <Link className="item" to="/products">Products</Link>
        <Link className="item" to="/shop">Card Shop {count}</Link>
      </nav>    
    </div>
  );
}

export default Navbar;
