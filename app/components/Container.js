import React, { useEffect } from "react"

//So pass this component Container via props and they will inherit the following CSS 
//classes. If props.wide is false will also have container--narrow class

function Container(props) {
  return (
    <div className={"container py-md-5 " + (props.wide ? '' : 'container--narrow')}>
      {props.children}
    </div>
  )
}

export default Container