import { useCallback, useEffect, useState } from "react";
import { Post } from "./componentes/Post";
import { Profile } from "./componentes/Profile";
import { SearchArea } from "./componentes/SearchArea";
import { PostListContainer } from "./styles";
import { api } from "../../lib/axios";

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

interface IPost {
  title: string
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${reponame}`
          )
          console.log(posts)
          console.log(response.data)
          setPosts(response.data.items)
      } finally {

      }
  }, [posts])

  useEffect(() => {
    getPosts()
  }, [])

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