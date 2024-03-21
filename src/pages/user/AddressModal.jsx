import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { TbViewfinder } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const AddressModal = ({ isOpen, onClose, onSubmit }) => {
  const [address, setAddress] = useState('');
  const nav = useNavigate();

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        alterAddress(position);
      },
      (error) => {
        console.error('에러가 발생했습니다.');
      }
    );
  };


  /* 카카오지도 API로 현재 유저 좌표를 동단위로 변환 */
  const alterAddress = (position) => {
    let x = position.coords.longitude;
    let y = position.coords.latitude;
    if (x && y) {
      axios.get(
        `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`,
        { headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}` } }
      ).then((result) => {
        if (result && result.data && result.data.documents && result.data.documents.length > 0) {
          //법정동 기준으로 동단위의 값을 가져온다
          let location = result.data.documents[0].address_name;
          setAddress(location);
        } else {
          console.error('유효한 응답 데이터가 없습니다.');
        }
      }).catch((error) => {
        console.error('카카오지도 API 호출 중 오류 발생:', error);
      });
    }
  };


  const handleSubmit = () => {
    console.log('address: ', address);
    onSubmit({ address });
    onClose();

  };

  return (
    <Modal
      isOpen={isOpen}
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
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{ fontSize: '30px', cursor: 'pointer', marginRight: '20px' }} onClick={() => { nav(-1) }}>&lt;</div>
          <StyledInput
            type="text"
            placeholder="동명(읍, 면)으로 검색 (ex. 서초동)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <CurrentLocationButton active='true' onClick={getCurrentLocation}><TbViewfinder />&nbsp;현재 위치로 찾기</CurrentLocationButton>
        <div style={{ textAlign: 'left', marginLeft: '18px' }}>
          <p>근처 동네</p>
          <p>서울특별시 구로구 개봉동</p>
          <p>서울특별시 구로구 오류제1동</p>
          <p>서울특별시 구로구 개봉제1동</p>
          <p>서울특별시 구로구 고척동</p>
          <p>경기도 광명시 광명1동</p>
          <p>경기도 광명시 광명2동</p>
        </div>

        <SubmitButton onClick={handleSubmit}>다음</SubmitButton>
      </ModalContent>
    </Modal>
  );
};

export default AddressModal;

const ModalContent = styled.div`
  text-align: center;
`;

const StyledInput = styled.input`
  margin-bottom: 20px;
  height: 40px;
  width: 80%;
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

const CurrentLocationButton = styled.button`
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
    margin: 0 auto 15px;
    font-size: 20px;
    pointer-events: ${(props) => (props.active === 'true' ? 'auto' : 'none')};
`;