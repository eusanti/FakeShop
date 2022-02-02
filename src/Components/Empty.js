import { Link } from 'react-router-dom';
import './components.css';

function Empty() {
  return (
    <div className="App ">
    
        <p>Go shopping!!</p>
        <button> 
            <Link className="item" to="/products">CLICK HERE! To see our products</Link>
        </button>
       
    </div>
  );
}

export default Empty;
