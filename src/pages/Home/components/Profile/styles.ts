import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  display: flex;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin-top: -6rem;
  background-color: ${(props) => props.theme['base-profile']};
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
      color: ${(props) => props.theme['base-title']};
    }

    a {
      font-weight: 700;
      font-size: 0.75rem;
      color: ${(props) => props.theme['base-title']};
    }
  }

  p {
    line-height: 1.6rem;
  }

  div {
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`
export const Detail = styled.span``
