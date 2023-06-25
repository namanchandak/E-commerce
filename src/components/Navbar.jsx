import { Search } from '@mui/icons-material'
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    height: 60 px;
    

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex; 
    justify-content: space-between;

`
const Left = styled.div`
    
`
const Right = styled.div`
    
`
const Center = styled.div`
    
`
const SearchContainer= styled.div`
    border: 1px solid lightgray;
    

`

const Language = styled.span`
    font-size:14;
    cursor: pointer;

`
 
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Language>
            <Left >l
            

            <SearchContainer>
                <Search></Search>
            </SearchContainer>
            

            </Left>
            </Language>
            
            <Center>c</Center>
            <Right>r</Right>
        </Wrapper>
        </Container>
  )
}

export default Navbar