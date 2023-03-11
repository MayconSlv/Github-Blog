import styled from "styled-components";

export const PostInfoContainer = styled.section`
  width: 100%;
  height: 16.8rem;
  background: ${({theme}) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  margin-top: -8rem;

  header {
    display: flex;
    justify-content: space-between;

    a {
      font-size: ${({theme}) => theme.textSizes['components-link']};
      font-weight: 700;
      color: ${({theme}) => theme.colors['brand-blue']};
      display: flex;
      align-items: center;
      gap: 0.8rem;
      border-bottom: 1px solid transparent;

      &:hover {
        transition: 0.2s;
        border-color: ${({theme}) => theme.colors['brand-blue']};
      }
    }
  }

  h1 {
    color: ${({theme}) => theme.colors['base-title']};
    font-size: ${({theme}) => theme.textSizes['title-title-l']};
    margin-top: 1.5rem;
  }

  ul {
    display: flex;
    gap: 3.2rem;
    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${({theme}) => theme.colors['base-span']};     

      svg {
        color: ${({theme}) => theme.colors['base-label']};
      }
    }
  }
`