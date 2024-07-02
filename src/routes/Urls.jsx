import { useLoaderData, Link } from 'react-router-dom';

export async function loader() {
    const response = await fetch('http://localhost:8000/urls');
    const data = await response.json();

    return { data };
}

const Urls = () => {
    const { data } = useLoaderData();

    console.log("Data?", data);

    return (
        <>
            <h2>URLS</h2>
            <p>Here are all the URLs that have been created:</p>
            <ul>
                {data.map((url, index) => {
                    return (
                        <li key={index}>
                            <Link to={url.user_id}>
                                {url.long_url} - {url.short_url}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default Urls;