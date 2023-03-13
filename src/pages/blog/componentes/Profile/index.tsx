import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "../../../../components/ExternalLink";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

const username = import.meta.env.VITE_GITHUB_USERNAME

export function Profile () {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)

  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)

      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])

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