import styled from "styled-components";

export const Container = styled.div`

    width:100vw;
    background: url("./img/blackbricks.png");
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
    overflow: hidden;

    @media screen and (max-width:480px){
        clip-path:none;
        }
`

export const Product = styled.div`

    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;

    img{        
        width: 50%;
    }
    @media screen and (max-width:480px){
        flex-direction: column;
        img{
            width:100%;
        }
    }

`

export const Details = styled.div`

    position: absolute;
    background-color: #f5f5f5;
    top: 10%;
    right: 5%;
    width: 40%;
    border-radius: 10px;
    padding: 50px;


    strong{
        font-size: 4.6875rem;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    h2{
        font-size: 1.5rem;
        font-weight: 900;
        margin: 20px 0;
    }

    p{
        font-size:1.5rem;
        color:gray;
    }

    button{
        float: right;
        padding: 10px 20px;
        font-size: 1.2rem;
        font-weight: 600;
        color:white;
        border: 3px solid #f5f5f5;
        background-color:#111;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;        
    }

    button:hover{
        background-color:#fff;
        color:#111;
        border: 3px solid #111;
    }

    @media screen and (max-width:480px){
        top:unset;
        right: unset;
        height:50%;
        bottom:0;
        width: 100%;
        padding: 0;
        border-radius: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        strong{
            font-size: 3rem;
            margin: 0;
        }

        p{
            font-size: 1rem;
        }
    }

`
export const Colors = styled.div`

    display: flex;
    margin: 20px 0;

    span{
        width: 35px;
        height: 35px;
        border: 3px solid #f5f5f5;
        margin-right: 10px;
        transition: all 0.1s ease-in-out;
        cursor: pointer;
    }
    span:hover{
        border: 0px solid #f5f5f5;
    }

`
export const Sizes = styled.div`

    margin: 20px 0;
    display: flex;

    span{
        padding: 5px 20px;
        border: 1px solid #111;
        margin-right: 10px;
        font-size: 1.5rem;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    span:hover{
        background-color: #ccc;
    }

`