import styled from 'styled-components'

export const PostContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};
  max-width: 26rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 1px solid ${(props) => props.theme['base-post']};
  transition: 0.4s;

  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme['base-span']};
  }

  div {
    display: flex;
    gap: 1rem;
    justify-content: center;

    span:nth-child(1) {
      flex: 1;
      font-size: 1.25rem;
      line-height: 2rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
    }

    span:nth-child(2) {
      width: fit-content;
      font-size: 0.875rem;
      line-height: 2rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    line-height: 1.625rem;
  }
`
