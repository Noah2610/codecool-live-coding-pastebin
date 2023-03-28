import NewPost from "./NewPost";
import ViewPost from "./ViewPost";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<NewPost />} />
            <Route path="/p/:postId" Component={ViewPost} />
        </Routes>
    );
}

export default App;
