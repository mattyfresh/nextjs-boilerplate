import React from 'react'
import Header from './Header'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

const GALLERY_QUERY = gql`
  query {
    gallery(id: "303-gallery") {
      data {
        url
        name
        aboutUs
      }
    }
  }
`

interface QueryResponse {
  gallery: {
    data: {
      aboutUs: string
      name: string
      url: string
    }
  }
}

const Layout: React.SFC = props => (
  <Query query={GALLERY_QUERY}>
    {({ data, loading, error }: any) => {
      if (loading) {
        return <div>...loading</div>
      }

      if (error) {
        console.error(error)
        return <div>error</div>
      }

      const galleryData = data as QueryResponse
      return (
        <div style={layoutStyle}>
          <Header galleryName={galleryData.gallery.data.name} />
          {props.children}
        </div>
      )
    }}
  </Query>
)

export default Layout
