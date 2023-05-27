import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <header>
    <Link to='/'><div className='logo'>ELIFTECH</div></Link>
    <Link className='shopLink' to='/'>Shop</Link>
    <Link className='cartLink' to='/cart'>Cart</Link>
  </header>
  );
}

export default Header;