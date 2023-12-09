import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations.js';
import css from './LoginForm.module.css'

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
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
            Email
            <div className={css.inputContainer}>
            <input className={css.input}
            type="email"
            name="email"
            placeholder="e-mail"
            required
            />
            </div>
        </label>
        <label className={css.label}>
            Password
            <div className={css.inputContainer}>
            <input className={css.input}
            type="password"
            name="password"
            placeholder="password"
            required
            />
            </div>
        </label>
        <button className={css.button} type="submit">Log In</button>
        </form>
    )
}
