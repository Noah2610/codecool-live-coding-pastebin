import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function ViewPost() {
    const { postId } = useParams();
    const [postBody, setPostBody] = useState(null);
    const textareaRef = useRef();

    async function fetchPost() {
        const response = await fetch(`http://0.0.0.0:8090/post/${postId}`);
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
