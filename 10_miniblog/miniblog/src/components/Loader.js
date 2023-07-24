import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => (
  <ContentLoader 
    speed={5}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#08ecfd"
    foregroundColor="#ecebeb"
  >
    <circle cx="317" cy="88" r="20" />
  </ContentLoader>
)

export default Loader