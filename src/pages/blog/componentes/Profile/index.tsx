import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "../../../../components/ExternalLink";

export function Profile () {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/MayconSlv.png" />
      <ProfileDetails>
        <header>
          <h1>Maycon Silva</h1>
          <ExternalLink text="GITHUB" href="#"/>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            Maycon Silva
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            ProgramadoresDoAmanha
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup}/>
            32 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}