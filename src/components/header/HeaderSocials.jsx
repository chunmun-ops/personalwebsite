import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsSpotify} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/chun-mun-9933b71b4/'><BsLinkedin/></a>
        <a href='https://github.com/chunmun-ops'><FaGithub/></a>
        <a href='https://www.instagram.com/chiachunmun/'><BsInstagram/></a>
        <a href='https://open.spotify.com/user/u95kjcdb02wxp4sdbty228sr8?si=525baf9a526149b0'><BsSpotify/></a>

    </div>
  )
}

export default HeaderSocials