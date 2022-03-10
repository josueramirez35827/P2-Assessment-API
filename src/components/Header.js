import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Header>
      <h5>Josue's P2-Assessment:</h5>
      <h2>Cat and Dog API</h2>
      <ul>
        <NavLink to='/'>
          <li>Landing Page</li>
        </NavLink>
        <NavLink to='/cat'>
          <li>Cat API</li>
        </NavLink>
        <NavLink to='/dog'>
          <li>Dog API</li>
        </NavLink>
      </ul>
    </Header>
  )
}