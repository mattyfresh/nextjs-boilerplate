import React from 'react'
import Link from 'next/Link'

const linkStyle = {
  marginRight: 15,
}

interface Props {
  galleryName: string
}

const Header = ({ galleryName }: Props) => (
  <div>
    <h1>{galleryName}</h1>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header
