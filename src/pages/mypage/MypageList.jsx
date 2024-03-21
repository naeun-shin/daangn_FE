import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import basicImg from '../../images/basicImg.png';
import { IoIosArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { ReactComponent as Wonsign } from '../../images/wonsign.svg';
import styled from 'styled-components';
import carrotPay from '../../images/carrotPay.jpg'




const MypageList = () => {
  const profileImage = '';

  return (
    <div>
      <IoSettingsOutline />
      <ProfileBar>
        <div style={{ display: 'flex' }}>
          <ProfileImage src={profileImage ? profileImage : basicImg} alt="Profile" />
          <p>바니마켓</p>
        </div>
        <button>프로필 보기</button>
      </ProfileBar>
      <PayDiv>
        <PayBar>
          <PayImage src={carrotPay} />
          <span>당근하는 새로운 방법, 당근페이! <IoIosArrowForward /></span>
        </PayBar>
        <ButtonBar>
          <PayButton><FiPlus />충전</PayButton>
          <PayButton><Wonsign style={{ width: '15px', height: '15px' }} />계좌송금</PayButton>
        </ButtonBar>
      </PayDiv>
    </div>
  )
}

export default MypageList


const ProfileBar = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const PayDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  height: 120px;
  border: 1px solid #FF6F0F;
  border-radius: 5px;
  display: flex;
  margin: 0 auto;
`

const PayBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PayImage = styled.img`
  width: 90px;
  height: 45px;
`

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const PayButton = styled.button`
  width: 45%;
  height: 35px;

`