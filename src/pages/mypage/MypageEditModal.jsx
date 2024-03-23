import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";
import basicImg from '../../images/basicImg.png';
import { ImCamera } from "react-icons/im";

const MypageEditModal = ({ isModalOpen, onClose, onSubmit }) => {
  const nav = useNavigate();
  const [user, setUser] = useState({
    phoneNumber: '010 1234 1234',
    nickname: '곰돌곰돌',
    address: '서울시 마포구 공덕동',
    email: 'abcd@abc.com',
    password: 'Abc1234!!!',
  })




  const handleSubmit = () => {
    console.log('User:', user);
    onSubmit({ user });
  };



  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'white',
          zIndex: 9999
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          overflow: 'auto',
          backgroundColor: 'white',
          border: '1px solid #FF6F0F',
          padding: 0,
          borderRadius: '5px',
        }
      }}
    >
      <ModalContent>
        <p>모달~모달~</p>
        <SubmitButton onClick={handleSubmit}>저장</SubmitButton>
      </ModalContent>
    </Modal >
  );
};

export default MypageEditModal;

const ModalContent = styled.div`
  padding: 0 14px;
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
