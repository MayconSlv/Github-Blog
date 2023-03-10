import styled from "styled-components";

export const ExternalLinkContainer = styled.a`
  font-size: ${({theme}) => theme.textSizes['components-link']};
  color: ${({theme}) => theme.colors['brand-blue']};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 1px solid transparent;
  transition: 0.2s;

  &:hover {
    border-color: ${({theme}) => theme.colors['brand-blue']};
  }
`