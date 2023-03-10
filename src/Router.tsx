import { Routes, Route } from "react-router-dom";
import { Blog } from "./pages/blog";
import { DeafultLayout } from "./layouts/DefultLayout";
import { Posts } from "./pages/posts";

export function Router () {
  return (
    <Routes>
      <Route path="/" element={<DeafultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/posts" element={<Posts />} />
      </Route>
    </Routes>
  )
}