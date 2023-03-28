import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ViewPost() {
    const { postId } = useParams();
    const [postBody, setPostBody] = useState(null);

    async function fetchPost() {
        const response = await fetch(`http://0.0.0.0:8090/post/${postId}`);
        const postBody = await response.text();
        setPostBody(postBody);
    }

    useEffect(() => {
        fetchPost();
    }, []);

    if (postBody === null) {
        return <div>Loading post...</div>;
    }

    return <textarea readOnly>{postBody}</textarea>;
}
