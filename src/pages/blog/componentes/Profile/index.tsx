import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "../../../../components/ExternalLink";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Spinner } from "../../../../components/Spinner";

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
      // setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <ProfileContainer>
      {isLoading ? <Spinner /> : (
        <>
          <ProfilePicture src="https://github.com/MayconSlv.png" />
          <ProfileDetails>
            <header>
              <h1>{profileData.name}</h1>
              <ExternalLink text="GITHUB" href={profileData.html_url} target="_blank" />
            </header>
            <p>{profileData.bio}</p>

            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>
              {profileData?.company && (
                <li>
                <FontAwesomeIcon icon={faBuilding} />
                {profileData.company}
              </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup}/>
                {profileData.followers} seguidores
              </li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  )
}