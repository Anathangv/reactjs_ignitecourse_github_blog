import styled from 'styled-components'

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  line-height: 1.6rem;

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.2rem;
  }

  p + p {
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 1.5rem;
    margin: 2rem 0 0.5rem;
  }

  h3 {
    font-size: 1.3rem;
    margin: 1.5rem 0 0.5rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  ul {
    margin-top: 0.5rem;
    margin-left: 2rem;
    list-style-position: inside;
    li + li {
      margin-top: 0.5rem;
    }
  }

  img {
    max-width: 50rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 0;
  }
`
