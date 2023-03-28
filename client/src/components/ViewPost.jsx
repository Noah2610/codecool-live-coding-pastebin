import { useParams } from "react-router-dom";

export default function ViewPost() {
    const params = useParams();

    console.log(params);

    return <h1>View Post!</h1>;
}
