import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../api";

export default function ViewPost() {
    const { postId } = useParams();
    const [postBody, setPostBody] = useState(null);
    const textareaRef = useRef();

    async function fetchPost() {
        const response = await fetch(`${API_URL}/post/${postId}`);
        const postBody = await response.text();
        setPostBody(postBody);
    }

    function onCopy() {
        textareaRef.current.select();
        document.execCommand("copy");
    }

    useEffect(() => {
        fetchPost();
    }, []);

    if (postBody === null) {
        return <div>Loading post...</div>;
    }

    return (
        <>
            <textarea ref={textareaRef} readOnly>
                {postBody}
            </textarea>
            <button onClick={onCopy}>Copy</button>
        </>
    );
}
