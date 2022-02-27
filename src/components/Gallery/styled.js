import styled from "styled-components";

export const Container = styled.div`

    padding: 50px;
    display: flex;
    background-color: #f5f5f5;

    
    @media screen and (max-width:480px){
        display: none;
    }
`

export const Content = styled.div`

    flex: 1;
    padding: 50px;
    text-align: center;
    
    strong{
        font-size: 2rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        white-space: pre-line;
    }
    
    img{
        width: 100%;
        padding: 30px;
    }

`