import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['base-profile']};

  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    ${(props) => props.theme['base-profile']} 35%,
    ${(props) => props.theme['base-background']} 100%
  );
  height: 18.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img:nth-child(2) {
    margin-bottom: 8.375rem;
  }
`
