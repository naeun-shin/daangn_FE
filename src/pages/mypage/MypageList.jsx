import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import basicImg from '../../images/basicImg.png';
import { IoIosArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";


const MypageList = () => {
  const profileImage = '';

  return (
    <div>
      <IoSettingsOutline />
      <div>
        <img src={profileImage ? profileImage : basicImg} alt="Profile" />
        <p>바니마켓</p>
        <button>프로필 보기</button>
      </div>
      <div>
        {/* <img src={ } /> */}
        <span>당근하는 새로운 방법, 당근페이! <IoIosArrowForward /></span>
        <button><FiPlus />충전</button>
        <button>계좌송금</button>
      </div>
    </div>
  )
}

export default MypageList