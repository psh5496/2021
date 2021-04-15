import styled from 'styled-components';

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & * {
        font-family: Apple;
        box-sizing: border-box;
    }

    @font-face {
        font-family: Apple;
        src: url('../assets/font/Apple_산돌고딕_Neo/AppleSDGothicNeoB.ttf');
    }
`;

export const Container = styled.div`
    width: 500px;
    height: 800px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Top = styled.div`
    width: 100%;
    height: 150px;
    background-color: #7fe5f0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    border-radius: 20px 20px 0px 0px;
`;
