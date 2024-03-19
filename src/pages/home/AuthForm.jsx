import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const AuthForm = () => {
  const nav = useNavigate();
  const isLogin = useLocation().state.isLogin;



  return (
    <div>
      <div style={{fontSize: '30px', marginBottom: '50px'}} onClick={() => { nav(-1) }}>&lt;</div>
      <div style={{marginLeft: '15px'}}>
        <HelloSpan>안녕하세요!</HelloSpan><br />
        {isLogin ? (
          <HelloSpan>휴대폰 번호로 로그인해주세요.</HelloSpan>
        ) : (
          <HelloSpan>휴대폰 번호로 가입해주세요.</HelloSpan>
        )}
        <p style={{fontSize: '14px', marginBottom: '25px'}}>휴대폰 번호는 안전하게 보관되며 이웃들에게 공개되지 않아요.</p>
      </div>
      <div>
        <TelInput type='tel' placeholder='휴대폰번호(- 없이 숫자만 입력)' />
        <VerificationBtn>인증문자 받기</VerificationBtn>
      </div>
      <ChangeTelDiv>
        <span>휴대폰 번호가 변경되었나요?&nbsp;</span>
        <span>이메일로 계정 찾기</span>
      </ChangeTelDiv>

    </div>
  )
}

export default AuthForm


const HelloSpan = styled.span`
  font-size: 25px;
  font-weight: 700;
`

const TelInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 91%;
    height: 50px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid black;
    margin: 0 auto;
    font-size: 20px;
    padding-left: 12px;
`

const VerificationBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid lightgray;
    color: lightgray;
    background-color: white;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    margin: 15px auto;
    font-size: 20px;
`

const ChangeTelDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;

    span:last-child {
        cursor: pointer;
        text-decoration-line: underline;
    }
`