import React, { Component } from 'react'
import { ASSETS_URL } from '../../constants'

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
      <footer className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-4">
            <h3>Sponsors</h3>
            <a href="">
              <img
                src={ASSETS_URL + '/images/assets/Sponsor_collation.svg'}
                className="icon_sponsor"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <h3>Follow us on</h3>
            <a
              href="https://www.facebook.com/ascendntnu/"
              className="fa fa-facebook"
            ></a>
            <a
              href="https://github.com/AscendNTNU"
              className="fa fa-github"
            ></a>
            <a
              href="https://www.instagram.com/ascendntnu/"
              className="fa fa-instagram"
            ></a>
            <a
              href="https://www.linkedin.com/company/ascend-ntnu"
              className="fa fa-linkedin"
            ></a>
          </div>
          <div className="col-sm-4">
            <a href="">
              <img
                src="/images/logo/ascend-no-background.png"
                className="icon_social_media"
              />
            </a>
          </div>
        </div>
        <br></br>
        <iframe
          src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fascendntnu%2F&width=140&layout=button_count&action=like&size=small&share=true&height=46&appId"
          width="140"
          height="46"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
        <div />
      </footer>
    )
  }
}

export default Footer
