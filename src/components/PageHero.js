import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({title,product}) => {
  return <Wrapper>
    <div className="section-center">
      <h3>
        <Link to='/'>Home</Link>
        {product && <Link to='/products'>/ Products</Link>}
        / {title}
      </h3>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  background: var(--clr-grey-5);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-grey-7);
  a {
    color: var(--clr-black);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-grey-7);
  }
`

export default PageHero
