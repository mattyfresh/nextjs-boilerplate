import React from 'react'

import Layout from '../components/Layout'
import PostLinkItem from '../components/PostLinkItem'

export default () => (
  <Layout>
    <h1>Home Page</h1>
    <ul>
      <PostLinkItem title="Hello Next.js" />
      <PostLinkItem title="Learn Next.js is awesome" />
      <PostLinkItem title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)
