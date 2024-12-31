import React from 'react'
import './Footer.css'
import faceBookIcon from '../../assets/facebook_icon.png'
import instaGramIcon from '../../assets/instagram_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import youtubeIcon from '../../assets/youtube_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={faceBookIcon} alt="youtube-icon" />
        <img src={instaGramIcon} alt="instagram-icon" />
        <img src={twitterIcon} alt="twitter-icon" />
        <img src={youtubeIcon} alt="youtube-icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright'>© 1997-2024 Netflix, inc.</p>
    </div>
  )
}

export default Footer
