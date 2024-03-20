import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProfileModal from './ProfileModal';
import { useMutation } from 'react-query';

const AuthForm = () => {
  const nav = useNavigate();
  const isLogin = useLocation().state.isLogin;
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [showVerificationButton, setShowVerificationButton] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [inputVerificationCode, setInputVerificationCode] = useState('');

  const [user, setUser] = useState({
    phoneNumber: '',
    nickname: '곰',
    address: '서울시',
    email: '111@111.com',
    password: 'Abc1234!!!',
  })

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;

    if (input.length === 13) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }

    if (input.length > 13) {
      return;
    }

    if (e.nativeEvent.inputType === 'deleteContentBackward' || e.nativeEvent.inputType === 'deleteContentForward') {
      setUser({
        ...user,
        phoneNumber: input,
      })
      return;
    }

    let formattedNumber = '';

    if (input.length === 3 || input.length === 8) {
      formattedNumber += input + ' ';
    } else {
      formattedNumber = input;
    }
    setUser({
      ...user,
      phoneNumber: formattedNumber,
    })
  };

  const handleVerificationButtonClick = () => {
    // 인증번호 발송 로직 추가
    const code = Math.floor(100000 + Math.random() * 900000);
    console.log('인증번호:', code);

    setVerificationCode(code);
    setShowVerificationButton(true);
    setShowVerificationModal(false);
    setIsButtonActive(false);
  };

  const handleVerificationConfirm = () => {
    if (parseInt(inputVerificationCode) === verificationCode) {
      if (!isLogin) {
        setShowVerificationModal(true);
      } else {
        nav('/');
      }
    } else {
      setErrorMessage('인증번호가 올바르지 않습니다.');
    }
  };

  const mutation = useMutation((formData) => {
    return fetch('http://3.38.152.248/user/signup', {
      method: 'POST',
      body: formData,
      headers: {
        'accept': '*/*',
        // 'Content-Type': 'multipart/form-data',
      },
    }).then(response => response.json());
  });

  const handleSubmitProfileModal = ({ nickname, email, profileImage }) => {
    console.log('nick: ', nickname);
    setUser({
      ...user,
      nickname,
      email,
    });
    setShowVerificationModal(false);

    const formData = new FormData();
    formData.append('signupRequestDto', JSON.stringify({
      email,
      password: user.password,
      nickname,
      phoneNumber: user.phoneNumber.replace(' ', '-'),
      address: user.address,
    }));
    formData.append('files', profileImage)

    mutation.mutate(formData, {
      onSuccess: data => {
        console.log('서버 응답:', data);
        for (let key of formData.keys()) {
          console.log('key: ', key);
        }
        for (let value of formData.values()) {
          console.log('value: ', value);
        }
      },
      onError: error => {
        console.error('에러 발생:', error);
      },
    });
  };


  return (
    <div>
      <div style={{ fontSize: '30px', marginBottom: '50px', cursor: 'pointer' }} onClick={() => { nav(-1) }}>&lt;</div>
      <div style={{ marginLeft: '15px' }}>
        <HelloSpan>안녕하세요!</HelloSpan><br />
        {isLogin ? (
          <HelloSpan>휴대폰 번호로 로그인해주세요.</HelloSpan>
        ) : (
          <HelloSpan>휴대폰 번호로 가입해주세요.</HelloSpan>
        )}
        <p style={{ fontSize: '14px', marginBottom: '25px' }}>휴대폰 번호는 안전하게 보관되며 이웃들에게 공개되지 않아요.</p>
      </div>
      <div>
        <TelInput type='text' placeholder='휴대폰번호(- 없이 숫자만 입력)'
          value={user.phoneNumber}
          onChange={handlePhoneNumberChange} />
        <VerificationBtn active={isButtonActive.toString()} onClick={handleVerificationButtonClick}>인증문자 받기</VerificationBtn>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        {showVerificationButton && (
          <>
            {/* 인증번호 입력란 */}
            <TelInput type='text' placeholder='인증번호 입력'
              value={inputVerificationCode}
              onChange={(e) => setInputVerificationCode(e.target.value)} />
            <p style={{ fontSize: '14px', margin: '2px 0 14px 18px' }}>어떤 경우에도 타인에게 공유하지 마세요!</p>
            {/* 인증번호 확인 버튼 */}
            <VerificationBtn active='true' onClick={handleVerificationConfirm}>인증번호 확인</VerificationBtn>
          </>
        )}
      </div>
      <ChangeTelDiv>
        <span>휴대폰 번호가 변경되었나요?&nbsp;</span>
        <span>이메일로 계정 찾기</span>
      </ChangeTelDiv>
      <ProfileModal
        isOpen={showVerificationModal && !isLogin}
        onClose={() => setShowVerificationModal(false)}
        onSubmit={handleSubmitProfileModal}
      />
    </div>
  );
};

export default AuthForm;

const HelloSpan = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

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
`;

const VerificationBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid lightgray;
    color: ${(props) => (props.active === 'true' ? 'white' : 'lightgray')};
    background-color: ${(props) => (props.active === 'true' ? '#FF6F0F' : 'white')};
    cursor: ${(props) => (props.active === 'true' ? 'pointer' : 'default')};
    font-size: 20px;
    font-weight: 500;
    margin: 15px auto;
    font-size: 20px;
    pointer-events: ${(props) => (props.active === 'true' ? 'auto' : 'none')};
`;

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
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
