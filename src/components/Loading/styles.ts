import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LoadingAnimation = styled(FontAwesomeIcon)`
  font-size: 5rem;
  animation: spin 1.5s linear infinite;
  color: ${(props) => props.theme.blue};
  margin: 3rem auto;
  display: block;
`
