import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  display: block;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin-top: -6rem;
  background-color: ${(props) => props.theme['base-profile']};

  header {
    display: flex;
    justify-content: space-between;
    align-items: initial;
    margin-bottom: 1rem;

    h3 {
      font-weight: 700;
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-title']};
    }
  }
`
export const NavegationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    text-decoration: none;
    height: fit-content;
    font-weight: 700;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    display: flex;
    gap: 0.5rem;
  }
`

export const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};
  }
`
