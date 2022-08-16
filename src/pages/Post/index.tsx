import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { IPosts } from '../Home'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

export function Post() {
  const [postData, setPostData] = useState<IPosts>({} as IPosts)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const username = import.meta.env.VITE_GITHUB_USERNAME
  const repoName = import.meta.env.VITE_GITHUB_REPONAME

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [username, repoName, id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <PostContainer>
      <PostInfo postData={postData} isLoading={isLoading} />

      {!isLoading && <PostContent content={postData.body} />}
    </PostContainer>
  )
}
