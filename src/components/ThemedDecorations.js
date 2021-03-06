// Code ThemedDecoration Component Here
import React from 'react'

class ThemedDecorations extends React.Component {
  render() {
    const classNameProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: child.props.theme
    })
  });
    return (
      <div>{classNameProp}
      </div>
    )
  }
}


export default ThemedDecorations
