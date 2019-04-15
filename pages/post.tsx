import React from 'react'
import { withRouter, WithRouterProps } from 'next/router'

import Layout from '../components/Layout'

interface PostContentProps {
  postTitle: string | string[]
}

const PostContent: React.SFC<PostContentProps> = ({ postTitle }) => (
  <div>{postTitle}</div>
)

const Post: React.SFC<WithRouterProps & any> = props => {
  const postTitle = props.router!.query!.title || ''
  return (
    <Layout>
      <h1>{postTitle}</h1>
      <PostContent postTitle={postTitle} />
    </Layout>
  )
}

export default withRouter(Post)
