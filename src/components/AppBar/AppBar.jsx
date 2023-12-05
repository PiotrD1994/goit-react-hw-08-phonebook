import { Navigation } from "components/Navigation/Navigation.jsx"
import { UserMenu } from "components/UserMenu/UserMenu.jsx"
import { AuthNav } from "components/AuthNav/AuthNav.jsx"
import { useAuth } from "hooks/useAuth.jsx"

export const AppBar = () => {
    const {isLoggedIn} = useAuth()

    return (
        <header>
            <Navigation/>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}