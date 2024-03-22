import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";
import basicImg from '../../images/basicImg.png';
import { ImCamera } from "react-icons/im";
import MypageEditModal from './MypageEditModal';

const MypageModal = ({ isOpen, onClose, onSubmit }) => {
  const nav = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [user, setUser] = useState({
    phoneNumber: '010 1234 1234',
    nickname: '곰돌곰돌',
    address: '서울시 마포구 공덕동',
    email: 'abcd@abc.com',
    password: 'Abc1234!!!',
  })



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
    setProfileImage(file);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };


  const handleSubmitEditModal = (updatedUser) => {
    setUser(updatedUser);
    setIsModalOpen(false);
  }

  const handleSubmit = ({ isOpen, onClose, onSubmit }) => {
    console.log('User:', user);
    onSubmit({ user });
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
          zIndex: 8888
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
          borderRadius: 0,
        }
      }}
    >
      <ModalContent>
        <div style={{ display: 'flex', alignItems: 'center', margin: '20px auto' }}>
          <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => { nav(-1) }}><IoIosArrowBack /></span>
          <p style={{ width: '314px', textAlign: 'center' }}>프로필 / 계정 관리</p>
        </div>
        <div>
          <TitleP>프로필 정보</TitleP>
          <div>
            <ProfileInfo>
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
              <div>
                {isEditing ? (
                  <InputContainer>
                    <NickInput value={user.nickname} onChange={(e) => setUser(prevUser => ({ ...prevUser, nickname: e.target.value }))} disabled={!isEditing} />
                    <span onClick={handleSave}>저장</span>
                  </InputContainer>
                ) : (
                  <InputContainer>
                    <NickInput value={user.nickname} disabled />
                    <span onClick={handleEdit}>변경</span>
                  </InputContainer>
                )}
              </div>
            </ProfileInfo>
          </div>
        </div>
        <div>
          <TitleP>계정 정보</TitleP>
          <UserInfoContainer>
            <InfoDiv>
              <InfoTitle>
                <span>이메일</span>
                <span onClick={() => setIsModalOpen(true)}>변경</span>
              </InfoTitle>
              <span>{user.email}</span>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>
                <span>휴대폰 번호</span>
                <span>변경</span>
              </InfoTitle>
              <span>{user.phoneNumber}</span>
            </InfoDiv>
          </UserInfoContainer>
        </div>
        <MypageEditModal
          isModalOpen={isModalOpen}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmitEditModal} />

        <SubmitButton onClick={handleSubmit}>저장</SubmitButton>
      </ModalContent>
    </Modal >
  );
};

export default MypageModal;

const ModalContent = styled.div`
  padding: 0 14px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 5px;
  }

  span {
    cursor: pointer;
    color: #FF6F0F;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const NickInput = styled.input`
  width: 130px;
  height: 35px;
  border-radius: 5px;
  background-color: transparent;
`

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 29px;
`
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

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

const TitleP = styled.p`
  text-align: left;
`
