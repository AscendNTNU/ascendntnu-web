import * as React from 'react'

export interface FooterProps {}

export class Footer extends React.Component<FooterProps, {}> {
  links: any[];

  constructor(props: any) {
    super(props);
    this.links = [
      {href: "mailto:hi@ascendntnu.no", icon: "envelope-o", content: "hi@ascendntnu.no"},
      {href: "https://twitter.com/ascendntnu/", icon: "twitter", content: "Twitter/@ascendntnu"},
      {href: "https://instagram.com/ascendntnu/", icon: "instagram", content: "Instagram/@ascendntnu"},
      {href: "https://www.facebook.com/ascendntnu", icon: "facebook-official", content: "Facebook"},
      {href: "https://github.com/ascendntnu", icon: "github", content: "Github"},
      {href: "https://www.linkedin.com/company/ascend-ntnu", icon: "linkedin", content: "LinkedIn"},
    ];
  }

  render () {
    let links = this.links.map((link, i) => {
      return (
        <a className="link" target="_blank" href={link.href} key={i}>
            <i className={link.icon ? "fa fa-" + link.icon : ""}></i> {link.content}
        </a>
      )
    })

    return (
      <div className="foot">
        <div className="foot-content page-container">
          <div className="foot-element">
            <a className="link foot-image" href="http://kongsberg.com" target="_blank">
              <img src="/images/sponsors/kongsberg_dark_bg.svg" alt="Kongsberg logo" />
            </a>
          </div>
          <div className="foot-element">
            {links}
          </div>
          <div className="foot-element">
            Autonomus aerial robotics. Ascend NTNU is The Norwegian University of Science and Technology's team in the International Aerial Robotics Competition (IARC).
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
