import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    @media screen and (max-width:480px){
        flex-direction: column;
    }
`
export const Content = styled.div`

    flex: 1;
    height: 90vh;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    
    
    img{
        width: 100%;
        height: 100%;
    }
    strong{
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 800;
        font-size: 2rem;
        margin-bottom:  3rem;
    }
    h2{
        font-weight: 900;
        font-size: 2.5rem;
        margin-bottom:  3rem;
    }
    h3{
        font-weight: 900;
        font-size: 2.5rem;
        margin-bottom:  3rem;
    }
    button{
        padding: 15px;
        font-weight: 600;
        font-size: 1.5rem;
        text-transform: uppercase;
        transition: all 0.3s ease-in-out;
        border: 3px solid #000;
    }
    button:hover{
        background-color: #111;
        border: 3px solid #fff;
        color: #fff;
    }
    
    @media screen and (max-width:480px){
        
        &:nth-child(2){
            padding: 2rem;

            strong{
                font-size: 1.5rem;
            }

            h2{
                font-size: 2rem;
            }
            h3{
                font-size: 2rem;
            }
        }
    }
    `