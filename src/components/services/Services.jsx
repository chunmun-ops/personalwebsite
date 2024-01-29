import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What have I achieved</h5>
      <h2>Awards and Accomplishment</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Academic</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SUTD Sophomore/Junior Honours List '23</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>SUTD Freshmore Honours List '22</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>SUTD Technology Entrepreneurship Programme (STEP) Scholar</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>PJC Colours Award '19</p> 
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Non-Academic</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Singtel Information Systems & Programming awards</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Finalist in WHAT THE HACK 2023</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Top 3 in "Ideate Something" Entrepreneurship Workshop</p> 
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Outstanding Student Organisation Award (SOAR)</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Outstanding 1D Project Exhibit: Information Systems and Programming & Computation Structures</p> 
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Volunteering Experience</h3>
          </div>

          <ul className='service__list'>
            <small className='time'>Ongoing</small>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Children Church Teacher</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Church Usher</p> 
            </li>

            <small className='time'>Past</small>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Project Touching Hearts - Cambodia</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Tutoring for the underprevilleged</p> 
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services