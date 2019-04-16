import React from 'react'
import { withRouter, WithRouterProps } from 'next/router'

import Layout from '../components/Layout'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

interface GalleryItemContentProps {
  galleryAbout: string
}

const GalleryItemContent: React.SFC<GalleryItemContentProps> = ({
  galleryAbout,
}) => <div dangerouslySetInnerHTML={{ __html: galleryAbout }} />

const GALLERY_QUERY = gql`
  query($galleryId: ID!) {
    gallery(id: $galleryId) {
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

const GalleryItem: React.SFC<WithRouterProps & any> = props => {
  const galleryName = props.router!.query!.galleryName || ''
  return (
    <Query query={GALLERY_QUERY} variables={{ galleryId: galleryName }}>
      {({ data, loading, error }: any) => {
        if (loading) {
          return <div>loading...</div>
        }

        if (error) {
          console.error(error)
          return <div>error</div>
        }

        const {
          gallery: {
            data: { name: galleryName, aboutUs },
          },
        } = data as QueryResponse

        return (
          <Layout>
            <h1>{galleryName}</h1>
            <GalleryItemContent galleryAbout={aboutUs} />
          </Layout>
        )
      }}
    </Query>
  )
}

export default withRouter(GalleryItem)
