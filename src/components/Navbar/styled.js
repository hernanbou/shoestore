import styled from "styled-components";

export const Container = styled.nav`
    width: 100vw;
    background-color:#111;
    color: white;
    padding: 20px 50px;
    position: sticky;
    top: 0;
    z-index: 900;

    @media screen and (max-width:480px){
        padding: 20px;
    }

`;

export const Content = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        text-decoration: none;
        cursor: pointer;
    }

    div{
        display: flex;
        align-items: center;
        background-color: gray;
        padding: 10px 20px;
        border-radius: 10px;

        input{
            border: none;
            background-color:transparent;
            height:1.5rem;
            margin-right: 10px;
            color:lightgray;
            cursor:pointer;
        }

        input::placeholder{
            color: lightgray;
        }

        img{
            width: 20px;
            height: 20px;
        }
    }

    span{
        font-size: 1.25rem;
        border-bottom: 2px solid green;
        cursor: pointer;
    }

    
    @media screen and (max-width:480px){

        padding-bottom:  1rem;
        border-bottom: 3px solid #f5f5f5;
        div{
            display: none;
        }
    }

`

export const Menu = styled.div`

    width: 60vw;
    padding-top: 20px;
    margin: auto;
    ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        li{
            position: relative;
            list-style: none;
            color: lightgray;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 0 10px;
            cursor: pointer;
            transition: 0.3s;
            
        }
        li:after{
            content: "";
            position: absolute;
            background-color:#ff3c78;
            height: 3px;
            width: 0;
            left: 0;
            bottom: -10px;
            transition: 0.3s;
        }
        li:hover{
            color: #fff;
            filter: drop-shadow(0 0 3px #fff);
        }
        li:hover:after{
            width: 100%;
        }
    }

    @media screen and (max-width:480px){

        margin: 0;
        
        ul{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1rem;
        }
        li{
            margin: 10px;
            font-weight: 700;
            font-size: 1.25rem;
        }
        li:nth-child(1){
            grid-column: 1 / 3;
        }
    }


    

`