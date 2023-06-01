import React from "react"
import ContentLoader from "react-content-loader"

const ItemsSceleton = (props: any) => (
  <ContentLoader 
    speed={2}
    width={230}
    height={270}
    viewBox="0 0 230 270"
    style={{margin: 4, marginTop: 0}}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="18" y="223" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="0" rx="8" ry="8" width="252" height="292" />
  </ContentLoader>
)

export default ItemsSceleton
