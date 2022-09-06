import React, { useState } from 'react'

const AddRemainderForm = props => {
	const initialFormState = { id: null, text: '', datetime: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.text || !user.datetime) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Text</label>
			<input type="text" name="text" value={user.text} onChange={handleInputChange} />
			<label>Datetime</label>
			<input type="datetime-local" name="datetime" value={user.datetime} onChange={handleInputChange} />
			<button>Add new remainder</button>
		</form>
	)
}

export default AddRemainderForm