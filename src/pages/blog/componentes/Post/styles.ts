import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%
  height: 26rem;
  border-radius: 10px;
  padding: 3.2rem;
  background: ${({theme}) => theme.colors['base-post']};
  border: 2px solid transparent;

  div {
    display: flex;
    gap: 1.6rem;

    strong {
      color: ${({theme}) => theme.colors['base-title']};
      font-size: ${({theme}) => theme.textSizes['title-title-m']};
      flex: 1;
      margin-bottom: 2rem;
    }

    span {
      color: ${({theme}) => theme.colors['base-span']};
      font-size: ${({theme}) => theme.textSizes['text-text-s']};
    }
  }

  &:hover {
    transition: 0.4s;
    border-color: ${({theme}) => theme.colors['base-label']};
  }
`