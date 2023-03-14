import { useState } from "react";

function App() {
    const [postBody, setPostBody] = useState("");

    function onSubmit(event) {
        event.preventDefault();

        fetch("http://0.0.0.0:8090/post", {
            method: "POST",
            body: postBody,
        });
    }

    return (
        <form action="#" onSubmit={onSubmit}>
            <textarea
                value={postBody}
                onChange={(event) => setPostBody(event.target.value)}
            ></textarea>
            <button>Submit</button>
        </form>
    );
}

export default App;
