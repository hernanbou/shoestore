import styled from "styled-components";

export const Container = styled.div`
    background: url("./img/blackbricks.png");
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    overflow-x: hidden;
    position: relative;
    width: 100vw;
    
    @media screen and (max-width:480px){
     clip-path:none;

    }
`;
export const LArrow = styled.span`

        width: 6vw;
        height: 12vh;
        top:50%;
        left: 0;
        position: absolute;
        background-image: url("./img/l_arrow.svg");
        background-repeat: no-repeat;
        background-position: center;
        z-index:1;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
            background-color: #f5f5f5;
        }
        
    @media screen and (max-width:480px){
            top:35%;
            height:15%;
            width:20%;
        }
`
export const RArrow = styled.span`

        width: 6vw;
        height: 12vh;
        top:50%;
        right: 0;
        position: absolute;
        background-image: url("./img/r_arrow.svg");
        background-repeat: no-repeat;
        background-position: center;
        z-index:1;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
            background-color: #f5f5f5;
        }

        @media screen and (max-width:480px){
            top:35%;
            height:15%;
            width:20%;
        }

`

export const Wrapper = styled.div`

    display: flex;
    width: 500vw;
    transition: all 1s ease-in-out;

`;

export const Product = styled.div`

    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.5s ease-in-out;

    &:nth-child(1){
        h2{
            border-color: #369e62;
        }
        span{
            background-color:#369e62;
        }
    }
    &:nth-child(2){

        h2{
            border-color:  #663399;
        }

        span{
            background-color:#663399;
        }
    }
    &:nth-child(3){

        h2{
            border-color: #008080;
        }

        span{
            background-color:#008080;
        }
    }
    &:nth-child(4){

        h2{
            border-color: #6495ED;
        }

        span{
            background-color:#6495ED;
        }
    }
    &:nth-child(5){

        h2{
            border-color: #7C7350;
        }

        span{
            background-color:#7C7350;
        }
    }

    img{
        z-index: 1;
    }

    span{
        position: absolute;
        width: 750px;
        height: 750px;
        border-radius:50%;        
    }

    strong{
        position: absolute;
        top: 10%;
        right: 10%;
        font-size: 3.75rem;
        font-weight: 900;
        text-align: center;
        color:white;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        white-space: pre-line;
        z-index: 1;
    }
    h2{
        position: absolute;
        top: 10%;
        left: 10%;
        padding: 5px;
        font-size: 3.75rem;
        font-weight: 300;
        color:#fff;
        border:3px solid #fff;
        border-radius:5px;
        text-align: center;
        z-index: 1;
    }

    button{
        position: absolute;
        padding: 10px;
        top: 70%;
        right: 10%;
        font-size: 1.875rem;
        font-weight: 900;
        color:white;
        border: 5px solid #fff;
        background-color:#111;
        text-transform: uppercase;
        letter-spacing: 2px;
        z-index: 1;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    button:hover{
        background-color:#fff;
        color:#111;
        border: 5px solid #111;
    }
    
    @media screen and (max-width:480px){
        img{
            width:90%;
        }
        span{
            width: 100%;
            height: 100%;
        }
        strong{
            display: none;
        }
        h2{
            top:unset;
            left: 8%;
            bottom: 8%;
            background-color: #f5f5f5;
            font-size: 3rem;
            border: none;
        }

        button{
            top:5%;
            right: 5%;
            font-size: 1.1rem;
        }

        &:nth-child(1){
        h2{
            color: #369e62;
            }
        }
        &:nth-child(2){

        h2{
            color:  #663399;
            }
        }
        &:nth-child(3){

        h2{
            color: #008080;
            }
        }
        &:nth-child(4){

        h2{
            color: #6495ED;
            }
        }
        &:nth-child(5){

        h2{
            color: #7C7350;
            }
        }
    }

`;