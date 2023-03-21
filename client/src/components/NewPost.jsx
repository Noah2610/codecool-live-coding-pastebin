import { useState } from "react";

export default function NewPost() {
    const [postBody, setPostBody] = useState("");
    const [postId, setPostId] = useState(null);

    async function onSubmit(event) {
        event.preventDefault();

        const response = await fetch("http://0.0.0.0:8090/post", {
            method: "POST",
            body: postBody,
        });

        const postId = await response.text();

        setPostBody("");
        setPostId(postId);
    }

    return (
        <>
            <form action="#" onSubmit={onSubmit}>
                <textarea
                    value={postBody}
                    onChange={(event) => setPostBody(event.target.value)}
                ></textarea>
                <button>Submit</button>
            </form>

            {postId && (
                <div>
                    New post created!{" "}
                    <a href={`http://localhost:8080/p/${postId}`}>{postId}</a>
                </div>
            )}
        </>
    );
}
