import React from 'react'

import Layout from '../components/Layout'
import PostLinkItem from '../components/PostLinkItem'
// import { ApolloConsumer } from 'react-apollo'
// import { gql } from 'apollo-boost'

// export default () => (
//   <ApolloConsumer>
//     {client => {
//       const gallery = client.query(GALLERY_QUERY)
//       return (
//         <Layout>
//           <h1>Home Page</h1>
//           <ul>
//             <PostLinkItem title="Hello Next.js" />
//             <PostLinkItem title="Learn Next.js is awesome" />
//             <PostLinkItem title="Deploy apps with Zeit" />
//           </ul>
//         </Layout>
//       )
//     }}
//   </ApolloConsumer>
// )

export default () => (
  <Layout>
    <ul>
      <PostLinkItem title="Hello Next.js" />
      <PostLinkItem title="Learn Next.js is awesome" />
      <PostLinkItem title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)
