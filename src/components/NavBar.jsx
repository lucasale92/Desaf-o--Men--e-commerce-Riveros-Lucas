import '../App.css'
import Menu from '../components/Menu';
function NavBar() {
    return <div className='App-header'> 
    <img src="/logo.png" alt="logo" className='App-logo' />
    <Menu />
    <img src="/cart2.svg" alt="carrito" className='App-carrito' />
    </div>

}
export default NavBar;
