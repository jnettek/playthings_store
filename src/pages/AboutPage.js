import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title="about"/>
    <Wrapper className="page section section-center">
    <img src={aboutImg} alt="toy figure"/>
    <article>
      <div className="title">
        <h2>Our Story</h2>
        <div className="underline"></div>
      </div>
      <p>
      At Playthings, we are a team of art lovers and collectors who are passionate about 
      bringing the magic of creatures to life. Our mission is to create unique, one-of-a-kind figures
       that inspire and captivate the imagination. With a commitment to quality and creativity, 
       each piece in our collection is handcrafted with love and attention to detail, 
       making them truly special. Whether you're a collector, an art enthusiast, or just looking for something special, we invite you to join us on our journey and experience the magic of Playthings for yourself.
        </p>
    </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
