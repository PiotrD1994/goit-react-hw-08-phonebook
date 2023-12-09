import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/filter/selectors.js'
import { changeFilter } from '../../redux/filter/filterSlice.js'
import css from './Filter.module.css'

export const Filter = () => {
    const value = useSelector(selectFilter)
    const dispatch = useDispatch()

    const onChange = event => {
        const normalizedValue = event.target.value.toLowerCase()
        dispatch(changeFilter(normalizedValue))
    }
    return (
        <div className={css.container}>
            <label className={css.label}>Find contact by name</label>
            <input className={css.input} type="text" value={value} onChange={onChange}/>
        </div>
    )
}

