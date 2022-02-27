import styled from "styled-components";

export const Container = styled.div`

    width: 500px;
    height: 500px;
    background-color: #f5f5f5;
    position: fixed;
    margin: auto;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 10px 50px;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0px 0px 100px 100px #000000; 
    box-shadow: 0px 0px 200px 100px #000000;
    z-index:999;
    h3{
        font-size: 1.25rem;
        color:#aaa;
        margin-bottom: 10px;
    }
    label{
        font-size: 0.875rem;
        font-weight: 300;
    }
    input{
        padding: 10px;
        margin: 10px 0;
        border: none;
        border-bottom: 1px solid #aaa;
    }
    section{
        display: flex;
        img{
            margin-right: 10px;
            width: 40px;
        }
    }
    footer{
        display: flex;
        justify-content: space-between;
        input{
            width: 30%;
        }
    }
    button{
        position: absolute;
        height: 40px;
        width: 100%;
        left: 0;
        bottom: 0;
        border: 3px solid #369e62;
        background-color: #369e62;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 1px;
        transition: all 0.3s ease-in-out;
    }
    button:hover { 
        color: #369e62;
        background-color:#fff;

    }
    span{
        position: absolute;
        margin: 0;
        padding: 0;
        right: 10px;
        top: 10px;
        width: 25px;
        height: 25px;
        font-size: 1.25rem;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #aaa;
        color: #fff;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }
    span:hover{
        background-color: red;
    }

    @media screen and (max-width:480px){
        height: 60%;
        width: 90%;
        padding: 20px;
        top: 30%;
    }
`