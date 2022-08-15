import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 54rem;

  margin: 0 auto;
`

export const PublicationsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  margin-bottom: 8rem;

  .card {
    text-decoration: none;

    width: 26rem;
    height: 16.25rem;

    padding: 2rem;

    background: ${({ theme }) => theme.post};
    border-radius: 10px;

    cursor: pointer;

    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;

      margin-bottom: 1.25rem;

      strong {
        font-size: 20px;
        line-height: 160%;
        color: ${({ theme }) => theme.title};
      }

      span {
        white-space: nowrap;
        font-size: 14px;
        line-height: 160%;
        color: ${({ theme }) => theme.span};
      }
    }

    p {
      color: ${({ theme }) => theme.text};
      height: 6.5rem;
      line-height: 160%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
