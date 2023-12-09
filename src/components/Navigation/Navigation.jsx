import { useAuth } from '../../hooks/useAuth.js';
import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className={css.nav}>
            <Link to="/" className={css.link}>
                Home
            </Link>
            {isLoggedIn && (
                <Link to="/contacts" className={css.link}>
                    Contacts
                </Link>
            )}
        </nav>
    );
};
  
   

