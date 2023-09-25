
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (

    <>
  {/* Your navigation or header can go here */}
  <nav>
  <ul>

    <li>
      <Link to="/">Home</Link>

    </li>
    <li>
      <Link to="/Splash">Splash</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/RegisterPage">Register</Link>
    </li>
   
    <li>
      <Link to="/LoginPage">LoginPage</Link>
    </li>

<li>
      <Link to="/ProductList">ProductList</Link>
    </li>
  </ul>
</nav>

<Outlet />
</>
)
};

export default Layout;