import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    margin-left: 5%;
    border-left: 3px solid gray;

    @media screen and (max-width:480px){
        flex-direction: column;
        border:none;
    }


`
export const Feature = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img{
        width: 50px;
        height: 50px;
    }

    strong{
        margin: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size:1.25rem;
    }

    span{
        width: 60%;
        color:gray;
    }

    @media screen and (max-width:480px){
        margin: 20px;
    }

`