import styled, { css } from "styled-components";

interface ExternalLinkContainerProps {
  variant?: "iconLeft"
}

export const ExternalLinkContainer = styled.a<ExternalLinkContainerProps>`
  font-size: ${({theme}) => theme.textSizes['components-link']};
  color: ${({theme}) => theme.colors['brand-blue']};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 1px solid transparent;
  transition: 0.2s;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  &:hover {
    border-color: ${({theme}) => theme.colors['brand-blue']};
  }

  ${({ variant }) => variant === "iconLeft" && css`
    flex-direction: row-reverse;
  `}
`