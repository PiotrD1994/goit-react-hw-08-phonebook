import { useAuth } from '../../hooks/useAuth.js';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    const {isLoggedIn} = useAuth()

    return (
        <nav>
            <Link to="/">Home</Link>
            {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </nav>
    )
}
  
   

