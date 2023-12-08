import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations.js';

export const RegisterForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.currentTarget
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset()
    }
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label>
                Username
                <input  
                type="text"
                name="name"
                placeholder="name"
                required
                />
            </label>
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
            <button type="submit">Register</button>
        </form>
    )
}