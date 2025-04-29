import { useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();

    // console.log(error);
    return (
        <div>Error page</div>
    );
};

export default ErrorPage;