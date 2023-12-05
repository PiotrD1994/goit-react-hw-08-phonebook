import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from 'redux/filter/selectors.js'
import { changeFilter } from 'redux/filter/filterSlice.js'

export const Filter = () => {
    const value = useSelector(selectFilter)
    const dispatch = useDispatch()

    const onChange = event => {
        const normalizedValue = event.target.value.toLowerCase()
        dispatch(changeFilter(normalizedValue))
    }
    return (
        <div>
            <label>Find contact by name</label>
            <input type="text" value={value} onChange={onChange}/>
        </div>
    )
}

