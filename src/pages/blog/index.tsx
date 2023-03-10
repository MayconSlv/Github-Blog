import { Post } from "./componentes/Post";
import { Profile } from "./componentes/Profile";
import { SearchArea } from "./componentes/SearchArea";
import { PostListContainer } from "./styles";

export function Blog() {
  return (
    <>
      <Profile />
      <SearchArea />
      <PostListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostListContainer>
    </>
  )
}