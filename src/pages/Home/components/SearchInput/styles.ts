import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  div {
    margin-bottom: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
      color: ${({ theme }) => theme.subtitle};
    }

    span {
      font-size: 14px;
      line-height: 160%;
      color: ${({ theme }) => theme.span};
    }
  }

  input {
    width: 100%;

    padding: 0.75rem 1rem;

    background: ${({ theme }) => theme.input};
    border: ${({ theme }) => theme.border};
    border-radius: 6px;

    &::placeholder {
      line-height: 160%;
      color: ${({ theme }) => theme.label};
    }
  }
`
