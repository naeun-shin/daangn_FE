import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import basicImg from '../../images/basicImg.png';
import { ImCamera } from "react-icons/im";

const ProfileModal = ({ isOpen, onClose, onSubmit }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
    setProfileImage(file);
  };

  const handleSubmit = () => {
    console.log('Nickname:', nickname);
    console.log('Profile image:', profileImage);
    onSubmit({ nickname, password, email, profileImage });
  };

  const validatePassword = () => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()]).{8,15}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(`비밀번호는 8~15자리의 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.
      사용가능 특수문자: ~ ! @ # $ % ^ & * ( )`);
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999
        },
        content: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'auto',
          backgroundColor: 'white',
          border: 'none',
          padding: 0,
        }
      }}
    >
      <ModalContent>
        <p>프로필 설정</p>
        <ProfileImageContainer>
          <ProfileImage src={profileImage ? URL.createObjectURL(profileImage) : basicImg} alt="Profile" />
          <ProfileImageLabel htmlFor="profileImage">
            <ProfileImageIcon><ImCamera /></ProfileImageIcon>
          </ProfileImageLabel>
          <ProfileImageInput
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </ProfileImageContainer>
        <StyledInput
          type="text"
          placeholder="닉네임을 입력해주세요."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <StyledInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={handlePasswordChange}
          style={{ marginBottom: 0 }}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <StyledInput
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginTop: '20px' }} />
        <p>프로필 사진과 닉네임, 이메일을 입력해주세요.</p>
        <SubmitButton onClick={handleSubmit}>다음</SubmitButton>
      </ModalContent>
    </Modal>
  );
};

export default ProfileModal;

const ModalContent = styled.div`
  text-align: center;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ProfileImageLabel = styled.label`
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const ProfileImageInput = styled.input`
  display: none;
`;

const ProfileImageIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 5px; 
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: white;
  opacity: 50%;
  border-radius: 50%;
  padding-bottom: 5px;
`;

const StyledInput = styled.input`
  margin-bottom: 20px;
  height: 50px;
  width: 92%;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #FF6F0F;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
  margin: 0 18px;
`;