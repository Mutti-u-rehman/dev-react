import { useRouteError } from "react-router";
const NotFound = () => {
    const error = useRouteError();

    // console.log(error);
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
        </div>
    );
}

export default NotFound;