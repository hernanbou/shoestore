import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background: #f5f5f5;
    @media screen and (max-width:480px){
        flex-direction: column;
        align-items: center;
    }
`
export const Content = styled.div`
    flex: 2;
    display: flex;
    padding: 50px;
    justify-content: space-between;
    @media screen and (max-width:480px){
        padding: 20px;
        width: 95%;
    }

`;
export const About = styled.div`

    h2{
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
    ul{
        padding: 0;
        list-style: none;
    }
    li{
        margin-bottom: 0.7rem;
        color:gray;
        cursor: pointer;
        transition: all 0.1s ease-in-out;
    }
    li:hover{
        color: #111;
    }
    
`;
export const Menu = styled.div`
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width:480px){
        padding: 20px;
        width: 95%;
        background-color: #ddd;
        
    }
`
export const Contacts = styled.div`

    h2{
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
    }
    footer{
        margin-bottom: 1rem;
        display: flex;
        input{
            border:2px solid #111;
            margin-right: 2px;
            padding: 5px;
        }
        button{
            border:2px solid #111;
            padding: 5px;
            background-color: #000;
            color: #fff;
            transition: all 0.3s ease-in-out;
        }
        button:hover{
            background-color: #fff;
            color: #000;
        }
    }
    ul{
        padding: 0;
        list-style: none;
        display: flex;
        margin-bottom: 1rem;
    }
    li{
        margin-right: 10px;
        padding-bottom: 5px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
    li:after{
            content: "";
            position: absolute;
            background-color:#111;
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
    img{
        width: 20px;
        height: 20px;
    }
    span{
        font-weight: 300;
        font-size: 0.8rem;
        color: gray;
        cursor: pointer;
    }

    @media screen and (max-width:480px){

        footer {
            width: 100%;
            justify-content: space-between;

            input{
                width: 80%;
            }
            button{
                width:20%;
            }
        }
    }
`;