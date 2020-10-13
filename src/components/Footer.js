import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks styleClass="footer-links"></SocialLinks>
      <h4>
        copyright&copy; {new Date().getFullYear()}
        &nbsp;<span>WebDev</span> all rights reserved
      </h4>
    </footer>
  )
}

export default Footer
