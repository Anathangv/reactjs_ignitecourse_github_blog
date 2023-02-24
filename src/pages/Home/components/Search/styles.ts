import styled from 'styled-components'

export const SearchContainer = styled.section`
  max-width: 100%;
  width: 54rem;
  margin: 0 auto;
  margin-top: 4.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    span:nth-child(1) {
      font-weight: 700;
      font-size: 1.125rem;
    }

    span:nth-child(2) {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
export const InputSearch = styled.input`
  border: none;
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};
  padding: 1rem 0.75rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
