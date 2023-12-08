import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations.js';

export const LoginForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.currentTarget
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset()
    }
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
        <label>
            Email
            <input
            type="email"
            name="email"
            placeholder="e-mail"
            required
            />
        </label>
        <label>
            Password
            <input
            type="password"
            name="password"
            placeholder="password"
            required
            />
        </label>
        <button type="submit">Log In</button>
        </form>
    )
}
