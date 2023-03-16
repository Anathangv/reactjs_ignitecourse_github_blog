import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin-top: -6rem;
  background-color: ${(props) => props.theme['base-profile']};

  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
  }
`
export const ContentContainer = styled.div`
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: initial;
    margin-bottom: 0.5rem;

    h3 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.95;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      text-decoration: none;
      height: fit-content;
      font-weight: 700;
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
      display: flex;
      gap: 0.5rem;
      border-bottom: 1px solid ${(props) => props.theme['base-profile']};
      transition: 0.4s;
      padding-bottom: 0.3rem;

      &:hover {
        border-color: ${(props) => props.theme.blue};
        cursor: pointer;
      }
    }
  }

  p {
    line-height: 1.6rem;
    color: ${(props) => props.theme['base-text']};
  }

  & > div {
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`
export const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
