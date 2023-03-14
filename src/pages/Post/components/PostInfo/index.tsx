import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostInfoContainer } from "./styles";
import { faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../blog";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { Spinner } from "../../../../components/Spinner";

interface PostsProps {
  isLoading: boolean
  posts: IPost
}

export function PostInfo({ posts, isLoading }: PostsProps) {
  const formatedData = relativeDateFormatter(posts.created_at)

  const navigate = useNavigate()
  function goBack() {
    navigate(-1)
  }

  return (
    <PostInfoContainer>
      {isLoading ? <Spinner /> : (
        <>
          <header>
            <ExternalLink 
              text="VOLTAR" 
              icon={<FontAwesomeIcon icon={faChevronLeft} />} 
              variant="iconLeft"
              onClick={goBack}
            />
            <ExternalLink text="VER NO GITHUB" href={posts.html_url} target="_blank" /> 
          </header>

          <h1>{posts.title}</h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {posts.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formatedData}
            </li> 
            <li>
              <FontAwesomeIcon icon={faComment} />
              {posts.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostInfoContainer>
  )
}