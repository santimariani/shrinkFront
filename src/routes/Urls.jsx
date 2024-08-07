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
            <p>Here's them URLS we be storing and transforming:</p>
            <ul>
                {data.map((url, index) => {
                    console.log(url)
                    return (
                        <li key={index}>
                            <Link to={`${url.id}`}>
                                {url.long_url}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default Urls;