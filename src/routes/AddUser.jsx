import { Form, redirect } from 'react-router-dom';

export async function action({request}) {
    const formData = await request.formData();
    const userName = formData.get('userName');
    const userPassword = formData.get('userPassword');

    const data = { username: userName, hashed_password: userPassword };

    const addUser = await fetch('http://localhost:8000/users/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
    console.log('USER ADDED:', addUser);
    return redirect('/')
}

const AddUser = () => {
    return (
        <Form method='post'>
            <label>
                User Name 
                <input 
                    name="userName" 
                    type="text" 
                />
            </label>
            <label>
                Password
                <input
                    name="userPassword"
                    type="text"
                />
            </label>
            <button type="submit">Add User</button>
        </Form>
    );
};

export default AddUser;