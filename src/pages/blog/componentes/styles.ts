import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  height: 212px;
  padding: 3.2rem 4rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${({theme}) => theme.colors['base-profile']};
  display: flex;
  gap: 3.2rem;
`

export const ProfilePicture = styled.img`
  width: 14.8rem;
  height: 14.8rem;
  border-radius: 8px;
`

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;  

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    h1 {
      color: ${({theme}) => theme.colors['base-title']};
      font-size: ${({theme}) => theme.textSizes['title-title-l']};
      font-weight: 700;
    }
  }

  ul {
    display: flex;
    gap: 2.4rem;
    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      svg {
        color: ${({theme}) => theme.colors['base-label']};
      }
    }
  }
`
