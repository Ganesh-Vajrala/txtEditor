import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  font-size: 20px;
  padding-top: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-size: 20px;
  cursor: pointer;
  color: ${props => props.color};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 20px;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => props.color};
`

export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const Image = styled.img`
  height: 300px;
  width: 300px;
`

export const ImageElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  min-height: 50vh;
  min-width: 25vw;
  margin-left: 30px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
`
export const HrElement = styled.hr`
  color: #cbd5e1;
  width: 100%;
  border-radius: 1px;
`
export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  margin: 10px;
`

export const TextAreaElement = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  color: #f1f5f9;
  font-size: 16px;
  width: 100%;
  padding: 5px;
  font-family: 'Roboto';
  min-height: 45vh;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`

export default Heading
