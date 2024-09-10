import LikeButton from "./like-button";


function Header({ title }) {
    console.log({ title });
    return <h1>{title ? title : 'Hello World'}</h1>
}

export default function HomePage() {
    const names = ['Iceland', 'Norway', 'Sweden', 'Finland', 'Denmark'];

    return (
        <div>
            <Header />
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}

