import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['base-profile']};
  height: 18.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img:nth-child(2) {
    margin-bottom: 8.375rem;
  }
`
