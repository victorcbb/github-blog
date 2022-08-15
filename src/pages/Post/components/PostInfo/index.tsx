import { PostInfoContainer } from './styles'
import arrowUpRightImg from '../../../../assets/arrow-up-right.svg'
import githubImg from '../../../../assets/github-brand.svg'
import buildingImg from '../../../../assets/building.svg'
import followsImg from '../../../../assets/follows.svg'
import { CaretLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function PostInfo() {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <PostInfoContainer>
      <div className="header">
        <a onClick={handleGoBack}>
          <CaretLeft size={12} weight="bold" />
          Voltar
        </a>
        <a href="https://github.com/victorcbb" target="_blank" rel="noreferrer">
          github
          <img src={arrowUpRightImg} alt="" />
        </a>
      </div>

      <h1>JavaScript data types and data structures</h1>

      <div className="footer">
        <div className="content-infos">
          <img src={githubImg} alt="" />
          <span>victorcbb</span>
        </div>
        <div className="content-infos">
          <img src={buildingImg} alt="" />
          <span>Freelancer</span>
        </div>
        <div className="content-infos">
          <img src={followsImg} alt="" />
          <span>40 seguidores</span>
        </div>
      </div>
    </PostInfoContainer>
  )
}
