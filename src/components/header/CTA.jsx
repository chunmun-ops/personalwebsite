import React from 'react'
import CV from '../../assets/ChiaChunMun_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        {/* added a download attr to allow people to download CV*/ }
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Feel free to contact me!</a>
    </div>
  )
}

export default CTA