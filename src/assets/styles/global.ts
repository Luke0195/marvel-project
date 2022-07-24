import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
  padding:0;
  margin:0;
  outline:0;
  box-sizing: border-box;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;

}

html, body, #root{
  height:100% !important;
}


body, input, button{
    font-size:1rem;
}

h1,h2,h3,h4,h5, h6{
  font-size:2rem;
}

a{
  text-decoration:none;
}

button{
  cursor: pointer;
}

ul{
  list-style:none
}

`
