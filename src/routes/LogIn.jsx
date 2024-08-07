import { Form, redirect } from 'react-router-dom';

export async function action({request}) {
    const formData = await request.formData();
    const userName = formData.get('userName');
    const userPassword = formData.get('userPassword');

    const data = { username: userName, hashed_password: userPassword };

    const addUser = await fetch('http://localhost:8000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
    console.log('USER ADDED:', addUser);
    return redirect('/')
}

const LogIn = () => {
    return (
        <Form method='post'>
            <label>
                Username 
                <input 
                    name="userName" 
                    type="email" 
                />
            </label>
            <label>
                Password
                <input
                    name="userPassword"
                    type="password"
                />
            </label>
            <button type="submit">LOG IN</button>
        </Form>
    );
};

export default LogIn;