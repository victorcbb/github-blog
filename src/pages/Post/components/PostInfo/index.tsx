import { useNavigate } from 'react-router-dom'
import { CaretLeft } from 'phosphor-react'

import arrowUpRightImg from '../../../../assets/arrow-up-right.svg'
import githubImg from '../../../../assets/github-brand.svg'
import calendarImg from '../../../../assets/calendar.svg'
import { Spinner } from '../../../../components/Spinner'
import balonImg from '../../../../assets/balon.svg'
import { PostInfoContainer } from './styles'
import { IPosts } from '../../../Home'
import { relativeDateFormatter } from '../../../../utils/formatter'

interface PostInfoProps {
  postData: IPosts
  isLoading: boolean
}

export function PostInfo({ postData, isLoading }: PostInfoProps) {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(postData.created_at)

  return (
    <PostInfoContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="header">
            <a onClick={handleGoBack}>
              <CaretLeft size={12} weight="bold" />
              Voltar
            </a>
            <a href={postData.html_url} target="_blank" rel="noreferrer">
              ver no github
              <img src={arrowUpRightImg} alt="" />
            </a>
          </div>

          <h1>{postData.title}</h1>

          <div className="footer">
            <div className="content-infos">
              <img src={githubImg} alt="ícone do github" />
              <span>{postData.user.login}</span>
            </div>
            <div className="content-infos">
              <img src={calendarImg} alt="ícone de calendário" />
              <span>{formattedDate}</span>
            </div>
            <div className="content-infos">
              <img src={balonImg} alt="balão de conversa" />
              <span>{postData.comments} comentários</span>
            </div>
          </div>
        </>
      )}
    </PostInfoContainer>
  )
}
