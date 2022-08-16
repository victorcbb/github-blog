import styled from 'styled-components'

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  pre {
    background: ${({ theme }) => theme.post};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'Fira Code', monospace !important;
        line-height: 160% !important;
      }
    }
  }

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.brand};
    text-decoration: underline;
  }

  ul {
    padding-left: 1.5rem;
  }
`
