import React from 'react'
import { useSelector } from 'react-redux'
import { selectVisibleContacts } from 'redux/contacts/selectors.js'
import { useDispatch } from 'react-redux'
import { deleteContacts } from 'redux/contacts/operations.js'

export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts)
    const dispatch = useDispatch()

    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name + ':' + contact.number}
                    <button type='button' name='delete' onClick={() => dispatch(deleteContacts(contact.id))}>delete</button>
                </li>
            ))}
        </ul>
    )
}
