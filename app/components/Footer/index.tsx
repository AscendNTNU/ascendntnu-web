import * as React from 'react'

export interface FooterProps {}

export class Footer extends React.Component<FooterProps, {}> {
  render () {
    return (
      <div className="foot">
        <div className="foot-content">
            Copyright 2016. Ascend NTNU.
        </div>
      </div>
    )
  }
}

export default Footer
