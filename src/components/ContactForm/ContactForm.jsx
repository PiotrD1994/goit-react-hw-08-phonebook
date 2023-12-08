import { useState } from "react";
import {nanoid} from 'nanoid'
import { useDispatch, useSelector } from "react-redux";
import {Filter} from '../Filter/Filter.jsx'
import { selectContacts } from "../../redux/contacts/selectors.js";
import { addContact } from "../../redux/contacts/contactsSlice.js";

const nameInputId = nanoid()
const numberInputId = nanoid()

export const ContactForm = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const contacts = useSelector(selectContacts)
    const dispatch = useDispatch()
    const handleSubmit = event => {
        event.preventDefault()

        const isInContacts = contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        )
       if(isInContacts) {
        alert('is already in contacts')
        return
       }
       dispatch(addContact({name, number}))
       setName('')
       setNumber('')
    }
    const handleChange = event => {
        const {name, value} = event.currentTarget 
        switch (name) {
            case 'name':
            setName(value)
            break
            case 'number' :
                setNumber(value)
                break
                default:
               return
        }
    } 

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor={nameInputId}>
                Name
                <input
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={handleChange}
                required
                />
            </label>
            <label htmlFor={numberInputId}>
                Number
                <input
                type="tel"
                name="number"
                placeholder="phonenumber"
                value={number}
                onChange={handleChange}
                required
                />
            </label>
           <button type='submit'>Add contact</button>
        </form>
        <Filter/>
        </>
    )
}