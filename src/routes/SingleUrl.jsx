import { useLoaderData } from "react-router-dom";

export async function loader({params}) {
    const {slug} = params;

    const response = await fetch(`http://localhost:8000/ceos/${slug}`);
    const data = await response.json();
    return {data}
}

const SingleCeo = () => {
    const { data } = useLoaderData();

    return <p>{data.name} was CEO of Apple Computer in {data.year}</p>
};

export default SingleCeo;