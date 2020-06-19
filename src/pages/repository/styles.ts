import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: 0.2s;

        &:hover{
            color: #666;
        }

        svg{
            margin-right: 4px;
        }
    }
`

export const RepositoryInfo = styled.section`
    margin-top:80px; 

    header{
        display: flex;
        align-items: center;

        img{
            height: 120px;
            width: 120px;

            border-radius: 50%;
        }

        div{
            margin-left: 24px;

            strong{
                font-size: 36px;
                color: #FFF
            }

            p{
                font-size: 18px;
                color: #CDCDCD;
                margin-top:4px;
            }
        }
    }

    ul{
        display: flex;
        list-style: none;
        margin-top: 40px;

        li{
            margin-right: 80px;

            strong{
                display: block;
                font-size: 36px;
                color: #FFF;
            }

            span{
                display: block;
                color: #CDCDCD;
                margin-top: 4px;
            } 
        }
        
    }
`

export const Issues = styled.div`
    margin-top: 80px;

    a{
        background: #454545;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a{
            margin-top: 8px;
        }

        &:hover{
            transform: translateX(10px)
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong{
                font-size: 20px;
                color: #FFF;
            }

            p{
                font-size: 18px;
                color: #CDCDCD;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6
        }
    }
`

