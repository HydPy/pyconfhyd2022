import * as React from "react"
export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
      <link
        rel="preload"
        href="/fonts/Montserrat-Regular.ttf"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        key="montserratFont"
      />,
    ])
  }