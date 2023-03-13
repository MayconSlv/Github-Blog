import { useCallback, useEffect, useState } from "react";
import { Post } from "./componentes/Post";
import { Profile } from "./componentes/Profile";
import { SearchArea } from "./componentes/SearchArea";
import { PostListContainer } from "./styles";
import { api } from "../../lib/axios";

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: string
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsloading] = useState(true)

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsloading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${reponame}`
          )
          console.log(response.data)
          setPosts(response.data.items)
      } finally {
        setIsloading(false)
      }
  }, [posts])

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchArea getPosts={getPosts} postsLenght={posts.length}/>
      <PostListContainer>
        {posts.map((post) => (
          <Post key={post.number} post={post}/>
        ) )}
      </PostListContainer>
    </>
  )
}