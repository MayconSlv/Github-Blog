import { useCallback, useEffect, useState } from "react";
import { PostInfo } from "./components/PostInfo";
import { api } from "../../lib/axios";
import { IPost } from "../blog";
import { useParams } from "react-router-dom";
import { PostContent } from "./components/PostContent";

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [posts, setPosts] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(`/repos/${username}/${reponame}/issues/${id}`)
      setPosts(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <>
      <PostInfo posts={posts} isLoading={isLoading} />
      {!isLoading && <PostContent content={posts.body} />}
    </>
  )
}