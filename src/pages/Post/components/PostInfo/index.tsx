import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostInfoContainer } from "./styles";
import { faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export function PostInfo() {
  const navigate = useNavigate()
  function goBack() {
    navigate(-1)
  }

  return (
    <PostInfoContainer>
      <header>
        <ExternalLink 
          text="VOLTAR" 
          icon={<FontAwesomeIcon icon={faChevronLeft} />} 
          variant="iconLeft"
          onClick={goBack}
        />
        <ExternalLink text="VER NO GITHUB" href="#" /> 
      </header>

      <h1>
        JavaScript data types and data structures
      </h1>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          MayconSlv
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          5 comentários
        </li>
      </ul>
    </PostInfoContainer>
  )
}