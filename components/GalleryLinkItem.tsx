import React from 'react'
import Link from 'next/Link'
import { slugify } from '../utils'

interface Props {
  title: string
}

const GalleryLinkItem: React.SFC<Props> = ({ title }) => {
  const sanitizedSlug = `/gallery/${slugify(title)}`

  // @NB we can use the `as` prop from next/Link to create nice URL's in the browser,
  // the actual `href` prop will be used internally to match the page type and pass data around
  return (
    <li>
      <Link as={sanitizedSlug} href={`/gallery?galleryName=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  )
}

export default GalleryLinkItem
