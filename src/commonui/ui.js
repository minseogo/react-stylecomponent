import styled from 'styled-components';


export const Title = styled.h2`
    font-family: ${props => props.en ? "Rubik" : "Pretendard" } ;
    font-size: 38px;
    font-weight: 700;
    color: #fe663f;
    letter-spacing: -0.5px;
    line-height: 2.5rem;
`;


export const Abtn = styled.a`
  border : 1px soild black;
  color - black;
  display : inline-block;
  padding : 10px;
  border-radius : 15px;
  &:hover{
    background-color : black;
    color : white;
  }
`;

export const Buttoncolor = styled.button`
  background: ${props => props.bgcolor};
  color: ${props => props.textbgcolor};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
 
`;
export const Buttonany = styled.button`
  background: ${props => props.bgcolor};  
  color: ${props => props.textbgcolor};
  font-size: ${props => props.fontSize};
  font-family :${props => props.fontfamily};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px; 
`;