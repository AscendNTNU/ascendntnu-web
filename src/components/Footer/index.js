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
      <footer className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-4">
            <h3>Project manager</h3>

            <h4>Jo Aleksander Johansen</h4>
            <br />
            <h4>
              <a href="mailto: jo.johansen@ascendntnu.no subject=subject text">
                jo.johansen@ascendntnu.no
              </a>
            </h4>
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
      </footer>
    )
  }
}

export default Footer
