import React from 'react'

import Layout from '../components/Layout'
import GalleryLinkItem from '../components/GalleryLinkItem'

export default () => (
  <Layout>
    <h1>Home Page</h1>
    <ul>
      <GalleryLinkItem title="303 Gallery" />
      <GalleryLinkItem title="Mosto Rojas" />
      <GalleryLinkItem title="Fraenkel Gallery" />
    </ul>
  </Layout>
)
