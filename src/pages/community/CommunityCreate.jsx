import React, { useRef, useState } from 'react';
import {
  Container,
  Header,
  CommunityWriteTitle,
  CommunityWriteContent,
  CommunityWriteFooter,
  CommunityWriteBox,
  CommunityWriteCategory,
  CommunityCateogyList,
} from '../CommunityStyles';
import { AiOutlinePicture } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { LightBreak } from '../styles/commonStyles.js';
import { VscClose } from 'react-icons/vsc';
import { useMutation } from '@tanstack/react-query';
import { createCommunity } from '../../apis/communityAxios.js';
import { useNavigate } from 'react-router-dom';

const CommunityCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] =
    useState('');
  const [address, setAddress] = useState(
    '서울시 서초구 반포동',
  );
  const [showOptions, setShowOptions] =
    useState(false);
  const communityCategory = [
    '동네질문',
    '생활정보',
    '동네맛집',
  ];

  const [selectedOption, setSelectedOption] =
    useState(communityCategory[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log(option);
    setShowOptions(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    console.log(e.target.files);
    const file = e.target.files[0]; // 첫 번째 파일만 선택하도록 함
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(file); // 선택된 파일의 URL을 상태에 저장
    };
    reader.readAsDataURL(file); // 파일을 읽어서 데이터 URL로 변환
  };

  const handleImageRemove = () => {
    setSelectedImage('');
  };

  const communityValue = {
    category: selectedOption,
    title,
    content,
    selectedImage,
    address,
  };

  const communityCreateMutation = useMutation({
    mutationFn: createCommunity,
    onSuccess: (response) => {
      console.log(response);
      navigate('/community');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      'submit button value > ',
      communityValue,
    );
    communityCreateMutation.mutate(
      communityValue,
    );
  };

  const handleGoBackClick = () => {
    navigate(-1);
  };
  return (
    <>
      {/* 헤더 영영 */}
      <Container>
        <Header>
          <VscClose
            size={26}
            onClick={handleGoBackClick}
          />
          <div>동네생활 글쓰기</div>
          <form onSubmit={handleSubmit}>
            <button type="submit">완료 </button>
          </form>
        </Header>
        <LightBreak />
        {/* body */}
        <CommunityWriteBox>
          <CommunityWriteCategory>
            <div
              onClick={() =>
                setShowOptions(!showOptions)
              }
            >
              {selectedOption}
            </div>
            {showOptions && (
              <CommunityCateogyList
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                }}
              >
                {communityCategory.map(
                  (option, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        handleOptionSelect(option)
                      }
                    >
                      {option}
                    </div>
                  ),
                )}
              </CommunityCateogyList>
            )}
          </CommunityWriteCategory>
          <CommunityWriteTitle
            placeholder="제목을 입력하세요."
            onChange={handleTitleChange}
            value={title}
          ></CommunityWriteTitle>
          <CommunityWriteContent
            placeholder="동네 근처 이웃과 동네에서의 소소한 일상, 정보를 공유해보세요."
            onChange={handleContentChange}
            value={content}
          ></CommunityWriteContent>
          <div>
            <img
              src={selectedImage}
              style={{ width: '25px' }}
            />
            <button onClick={handleImageRemove}>
              X
            </button>
          </div>
        </CommunityWriteBox>
        <LightBreak />
        <CommunityWriteFooter>
          <input
            type="file"
            // style={{ display: "none" }}
            onChange={handleImageChange}
            // value={selectedImage}
          />
          <AiOutlinePicture /> &nbsp;
          <p>사진</p>
          <button>
            <BiMap /> &nbsp; <p>장소</p>
          </button>
        </CommunityWriteFooter>
      </Container>
    </>
  );
};

export default CommunityCreate;
