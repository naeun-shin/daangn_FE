import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProfileModal from './ProfileModal';
import { useMutation } from 'react-query';
import axios from 'axios';
import AddressModal from './AddressModal';
import { Cookies } from 'react-cookie';

const AuthForm = () => {
  const nav = useNavigate();
  const isLogin = useLocation().state.isLogin;
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [showVerificationButton, setShowVerificationButton] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [inputVerificationCode, setInputVerificationCode] = useState('');
  const [showAddressModal, setShowAddressModal] = useState(true);

  const cookie = new Cookies();

  const [user, setUser] = useState({
    phoneNumber: '',
    nickname: '곰',
    address: '서울시',
    email: '111@111.com',
    password: 'Abc1234!!!',
  })

  //주소 받기
  const handleSubmitAddressModal = ({ address }) => {
    console.log('address: ', address);
    setUser({
      ...user,
      address,
    })

    localStorage.setItem('address', address);

    setShowAddressModal(false);
  }

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


  //가입 인증번호 발송
  const sendPhoneNumber = async (phoneNumber) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup/send-code-phone`, {
        phoneNumber: phoneNumber
      });
      return response.data;
    } catch (error) {
      throw new Error('API 호출이 실패했습니다.');
    }
  };

  //로그인 인증번호 발송
  const sendPhoneNumber2 = async (phoneNumber) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login/send-code-phone`, {
        phoneNumber: phoneNumber,
      });
      return response.data;
    } catch (error) {
      throw new Error('API 호출이 실패했습니다.');
    }
  };


  const sendPhoneNumberMutation = useMutation(sendPhoneNumber, {
    onSuccess: (data) => {
      const match = data.data.match(/\((\d+)\)/);
      if (match) {
        const code = match[1];
        console.log('인증번호:', code);

        setVerificationCode(code);
        setShowVerificationButton(true);
        setShowVerificationModal(false);
        setIsButtonActive(false);
      } else {
        console.error('인증번호를 찾을 수 없습니다.');
      }
    },
    onError: () => {
      console.error('API 호출 중 오류 발생');
    }
  });

  const sendPhoneNumberMutation2 = useMutation(sendPhoneNumber2, {
    onSuccess: (data) => {
      const match = data.data.match(/\((\d+)\)/);
      if (match) {
        const code = match[1];
        console.log('인증번호:', code);

        setVerificationCode(code);
        setShowVerificationButton(true);
        setShowVerificationModal(false);
        setIsButtonActive(false);
      } else {
        console.error('인증번호를 찾을 수 없습니다.');
      }
    },
    onError: () => {
      console.error('API 호출 중 오류 발생');
    }
  });


  const handleVerificationButtonClick = async () => {
    isLogin ? sendPhoneNumberMutation2.mutate(user.phoneNumber) : sendPhoneNumberMutation.mutate(user.phoneNumber);
  };



  //인증번호 일치여부 확인(회원가입)
  const checkPhoneNumber = async (phoneNumber, verificationCode) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup/check-code-phone`, {
        phoneNumber,
        verificationCode,
      });
      return response.data;
    } catch (error) {
      throw new Error('API 호출이 실패했습니다.');
    }
  };

  const checkPhoneNumberMutation = useMutation(checkPhoneNumber, {
    onSuccess: async (data) => {
      if (data.data) {
        if (!isLogin) {
          setShowVerificationModal(true);
        }
      } else {
        console.error('인증번호가 일치하지 않습니다.');
      }
    },
    onError: () => {
      console.error('API 호출 중 오류 발생');
    }
  });



  //인증번호 일치여부 확인(로그인)
  const checkPhoneNumber2 = async ({ phoneNumber, verificationCode }) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login/phone`, {
        phoneNumber,
        verificationCode,
      });
      return response.data;
    } catch (error) {
      throw new Error('API 호출이 실패했습니다.');
    }
  };

  const checkPhoneNumberMutation2 = useMutation(checkPhoneNumber2, {
    onSuccess: async (data) => {
      cookie.set("token", data.data.authorization);
      nav('/home');
    },
    onError: () => {
      console.error('API 호출 중 오류 발생');
    }
  });

  const handleVerificationConfirm = async () => {
    const requestData = {
      phoneNumber: user.phoneNumber,
      verificationCode: inputVerificationCode,
    };

    if (isLogin) {
      checkPhoneNumberMutation2.mutate(requestData);
    } else {
      checkPhoneNumberMutation.mutate(requestData);
    }
  };


  //회원가입
  const mutation = useMutation((formData) => {
    return axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, formData, {
      headers: {
        'accept': '*/*',
        // 'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => response.data);
  });

  const handleSubmitProfileModal = ({ nickname, password, email, profileImage }) => {
    console.log('nick: ', nickname);
    setUser({
      ...user,
      nickname,
      password,
      email,
    });
    setShowVerificationModal(false);

    const formData = new FormData();
    formData.append('signupRequestDto', JSON.stringify({
      email,
      password,
      nickname,
      phoneNumber: user.phoneNumber,
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
      {!isLogin && <AddressModal isOpen={showAddressModal} onClose={() => setShowAddressModal(false)} onSubmit={handleSubmitAddressModal} />}
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
            <TelInput type='text' placeholder='인증번호 입력'
              value={inputVerificationCode}
              onChange={(e) => setInputVerificationCode(e.target.value)} />
            <p style={{ fontSize: '14px', margin: '2px 0 14px 18px' }}>어떤 경우에도 타인에게 공유하지 마세요!</p>
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




