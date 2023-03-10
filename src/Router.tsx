import { Routes, Route } from "react-router-dom";
import { Blog } from "./pages/blog";
import { DeafultLayout } from "./layouts/DefultLayout";

export function Router () {
  return (
    <Routes>
      <Route path="/" element={<DeafultLayout />}>
        <Route path="/" element={<Blog />} />
      </Route>
    </Routes>
  )
}