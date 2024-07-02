import { Form, redirect } from 'react-router-dom';

export async function action({request}) {
    const formData = await request.formData();
    const long_url = formData.get('long_url');
    const title = formData.get('title');

    const data = { long_url: long_url, title: title };

    const addUrl = await fetch('http://localhost:8000/urls/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
    console.log('URL SHRINKIFIED:', addUrl);
    return redirect('/')
}

const AddUrl = () => {
    return (
        <>
            <Form method='post'>
                <label>
                    URL to Shrink 
                    <input 
                        name="long_url" 
                        type="url" 
                    />
                </label>
                <label>
                    Title(Optional)
                    <input
                        name="title"
                        type="text"
                    />
                </label>
                <button type="submit">SHRINKIFY!</button>
            </Form>
            <Form>
                <label>
                    New URL!
                    <input></input>
                </label>
            </Form>
        </>
    );
};

export default AddUrl;