import React, { Component } from 'react'

export class Footer extends Component {
  constructor(props) {
    super(props)
    this.links = [
      {
        href: 'mailto:hi@ascendntnu.no',
        icon: 'envelope-o',
        content: 'hi@ascendntnu.no',
      },
      {
        href: 'https://twitter.com/ascendntnu/',
        icon: 'twitter',
        content: 'Twitter/@ascendntnu',
      },
      {
        href: 'https://instagram.com/ascendntnu/',
        icon: 'instagram',
        content: 'Instagram/@ascendntnu',
      },
      {
        href: 'https://www.facebook.com/ascendntnu',
        icon: 'facebook-official',
        content: 'Facebook',
      },
      {
        href: 'https://github.com/ascendntnu',
        icon: 'github',
        content: 'Github',
      },
      {
        href: 'https://www.linkedin.com/company/ascend-ntnu',
        icon: 'linkedin',
        content: 'LinkedIn',
      },
      { href: 'https://ascendntnu.no/blog/rss', icon: 'rss', content: 'RSS' },
    ]
  }

  render() {
    let links = this.links.map((link, i) => {
      return (
        <a
          className={'link icon icon-' + link.icon}
          target="_blank"
          href={link.href}
          key={i}
        >
          <i className={link.icon ? 'fa fa-' + link.icon : ''} />
        </a>
      )
    })

    return (
      <div className="foot">
        <div className="foot-content page-container">
          <div className="foot-element">
            <a
              className="link foot-image"
              href="http://kongsberg.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/sponsors/kongsberg_dark_bg.svg"
                alt="Kongsberg logo"
              />
            </a>
          </div>
          <div className="foot-element">
            {links}
            <div
              className="fb-like"
              data-href="https://www.facebook.com/ascendntnu/?fref=ts"
              data-width="100"
              data-layout="standard"
              data-action="like"
              data-size="small"
              data-colorscheme="dark"
              data-show-faces="false"
              data-share="true"
            />
          </div>
          <div className="foot-element">
            <p>
              Autonomus aerial robotics. Ascend NTNU is The Norwegian University
              of Science and Technology's team in the International Aerial
              Robotics Competition (IARC).
            </p>
            <div
              onClick={this.props.changeTheme.bind(this)}
              className="styled-link"
            >
              Change to {this.props.theme === 'dark' ? 'light' : 'dark'} theme
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
