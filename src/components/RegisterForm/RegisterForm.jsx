import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
                pattern="^[^\d]+$"
                required
                />
            </label>
            <label>
            Email
            <input
            type="email"
            name="email"
            placeholder="e-mail"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
            />  
            </label>
            <label>
            Password
            <input
            type="password"
            name="password"
            placeholder="password"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
            />  
            </label>
            <button type="submit">Register</button>
        </form>
    )
}