import * as React from 'react'
import { Link, IndexLink } from 'react-router'

export interface BreadcrumbProps {
  routes?: string[],
}

export class Breadcrumb extends React.Component<BreadcrumbProps, {}> {
  constructor(props: BreadcrumbProps) {
    super(props)
  }

  render() {
    let links: any
    let last: any

    if (this.props.routes) {
      let build: string = ''
      links = this.props.routes.slice(0, -1).map((b: any, i: number) => {
        build += '/' + b
        return (<Link key={i} to={build}>{b}</Link>)
      })
      last = (<span>{this.props.routes.slice(-1)[0]}</span>)
    }

    return (
      <div className="page-container flex no-grow">
        <div className="breadcrumb-container">
          <IndexLink to="/">Home</IndexLink>
          {links}
          {last}
        </div>
      </div>
    )
  }
}
