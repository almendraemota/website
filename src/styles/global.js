import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --header-height: 6rem;

    /* colors */
      --white: #E3E3E3;
      --black: #111111;
      --black-light: #333;
      --gray: #5E5E5E;
      --gray-light: #d1d1d1;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;

    /*Every 1rem will be considered 10*/
    font-size: 62.5%
  }

  a {
    text-decoration: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: var(--white);
  }

  img {
    width: 100%;
  }

  /*-----SCROLL---*/
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--black);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--black-light);
  }

  .container {
    margin-left: 24rem;
    margin-right: 24rem;
  }

  .section {
    padding: calc(5rem + var(--header-height)) 0;
  }

  .title {
    font-size: 3.25rem;
    font-weight: 700;
    color: var(--white);
  }

  .title-2 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
  }

  .text {
    font-size: 1.6rem;
    font-weight: 300;
    color: var(--gray-light);
  }

  .button-white {
    display: inline-flex;
    align-items: center;
    padding: 1.2rem 3.4rem;
    
    border-radius: 0.313rem;

    font-size: 1.8rem;
    font-weight: 500;
    color: var(--black-light);
    background-color: var(--white);
    margin-top: 1.5rem;
    
    cursor: pointer;
    transition: ease 0.3s;

    &:hover {
      background: var(--gray-light);
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    padding: 1.2rem 3.4rem;
    
    border-radius: 0.313rem;

    font-size: 1.8rem;
    font-weight: 500;
    color: var(--white);
    background-color: var(--black-light);
    margin-top: 1.5rem;
    
    cursor: pointer;
    transition: ease 0.3s;

    &:hover {
      background: var(--gray);
    }
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
    z-index: 100;
    background: none;
  }

  .header.active {
    background: #101014;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  }

  //responsive
  @media (max-width: 1680px) {
    .container {
      margin-left: 20rem;
      margin-right: 20rem;
    }
  }

  @media (max-width: 1366px) {
    .container {
      margin-left: 15rem;
      margin-right: 15rem;
    }
  }

  @media (max-width: 1199.98px) {
    .container {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  @media (max-width: 767.98px) {
    .title {
        font-size: 2.2rem;
    }

    .title-2 {
      font-size: 1.9rem;
  }

    .subtitle {
        font-size: 1.4rem;
    }
  }
`