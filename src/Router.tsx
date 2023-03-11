import { Routes, Route } from "react-router-dom";
import { Blog } from "./pages/blog";
import { DeafultLayout } from "./layouts/DefultLayout";
import { Post } from "./pages/Post";

export function Router () {
  return (
    <Routes>
      <Route path="/" element={<DeafultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}