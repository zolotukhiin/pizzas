import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="136" cy="121" r="108" /> 
    <rect x="5" y="251" rx="15" ry="15" width="280" height="20" /> 
    <rect x="6" y="284" rx="15" ry="15" width="274" height="72" /> 
    <rect x="7" y="370" rx="15" ry="15" width="104" height="28" /> 
    <rect x="145" y="371" rx="15" ry="15" width="134" height="33" />
  </ContentLoader>
)

export default MyLoader;