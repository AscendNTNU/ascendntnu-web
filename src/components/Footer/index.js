import React, { Component } from 'react'
import { ASSETS_URL } from '../../constants'

export class Footer extends Component {
  render() {
    return (
      /*Sponser image on left side  */
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
          {/* Links to social media */}
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
          {/* Ascend logo on right side */}
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
        {/* Facebook share and like buttons */}
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
