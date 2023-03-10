import styled from "styled-components";

export const SearchAreaForm = styled.form`
  margin-top: 7.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  header {
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: ${({theme}) => theme.textSizes['title-title-s']};
      font-weight: 700;
      color: ${({theme}) => theme.colors['base-subtitle']};
    }

    span {
      color: ${({theme}) => theme.colors['base-span']};
      font-size: ${({theme}) => theme.textSizes['text-text-s']}; 
    }
  }

  input {
    border: 1px solid ${({theme}) => theme.colors['base-border']};
    background: ${({theme}) => theme.colors['base-input']};
    border-radius: 6px;
    padding: 1.2rem 1.6rem;
    color: ${({theme}) => theme.colors['base-text']};

    &::placeholder {
      color: ${({theme}) => theme.colors['base-label']};
    }
  }
`