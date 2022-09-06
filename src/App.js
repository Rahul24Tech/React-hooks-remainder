import React, { useState, Fragment } from 'react'
import RemainderTable from "./table/RemainderTable";
import AddRemainderForm from "./form/AddRemainderForm";
import EditUserForm from "./form/EditUserForm";

const App = () => {
	// Data
	const usersData = [
    { id: 1, text: "Study", datetime: "2022-06-10T05:00" },
    { id: 2, text: "Gym", datetime: "2022-06-10T08:00" },
    { id: 3, text: "Cooking", datetime: "2022-06-10T10:00" },
  ];

	const initialFormState = { id: null, text: '', datetime: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, text: user.text, datetime: user.datetime })
	}

	return (
		<div className="container">
			<h1>Remainder App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add remainder</h2>
							<AddRemainderForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View remainder</h2>
					<RemainderTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App