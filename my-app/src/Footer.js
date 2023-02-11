import React from 'react'

function Footer() {
  return (
    <>
        <div className="foot-container">
            <div className="links">
                <a href="https://www.youtube.com/@krishnamishratech/featured" style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ "./logo/Facebook.png"}` } }>
                  
                </a>
                <a style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ "./logo/gmail.png"}` } }></a>
                <a style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ "./logo/instagram.png"}` } }></a>
                <a style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ "./logo/linkden.png"}` } }></a>
                <a style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ "./logo/Twitter.webp"}` } }></a>
                <a style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ "./logo/youtube.webp"}` } }></a>
                
            </div>
            <div className="info">
              <a>Help</a>
              <a>About Authors</a>
              <a>Our Mission</a>
            </div>
        </div>
    </>
  )
}

export default Footer