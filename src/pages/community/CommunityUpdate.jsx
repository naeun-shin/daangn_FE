import React, {
  useEffect,
  useState,
} from 'react';
import {
  Container,
  Header,
  CommunityWriteTitle,
  CommunityWriteContent,
  CommunityWriteFooter,
  CommunityWriteBox,
  CommunityWriteCategory,
  CommunityCateogyList,
} from '../CommunityStyles.js';
import { AiOutlinePicture } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { LightBreak } from '../styles/commonStyles.js';
import { VscClose } from 'react-icons/vsc';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  getCommunityDetail,
  updateCommunity,
} from '../../apis/communityAxios.js';
import {
  useQuery,
  useMutation,
} from '@tanstack/react-query';
// import { useMutation } from '@react-query';

const CommunityUpdate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imagePreview, setImagePreview] =
    useState('');
  const [selectedImage, setSelectedImage] =
    useState('');
  const [address, setAddress] = useState(
    '서울시 서초구 반포동',
  );
  const [showOptions, setShowOptions] =
    useState(false);
  const [communityId, setCommunityId] =
    useState('');

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

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['community', id],
    queryFn: () => getCommunityDetail(id),
  });

  useEffect(() => {
    console.log(data.contents);
    if (data) {
      setTitle(data.title);
      setContent(data.content);
      setSelectedImage(data.communityImageList);
      // setAddress(data.address);
      setSelectedOption(data.category);
      setCommunityId(data.communityId);
    }
  }, [data]);

  const newCommunityValue = {
    category: selectedOption,
    title,
    content,
    selectedImage,
    address,
    communityId,
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleImageChange = (e) => {
    console.log(e);
    const file = e.target.files[0]; // 첫 번째 파일만 선택하도록 함
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result); // 선택된 파일의 URL을 상태에 저장
    };
    reader.readAsDataURL(file); // 파일을 읽어서 데이터 URL로 변환
    // Set image preview
    setImagePreview(URL.createObjectURL(file));
  };

  const communityUpdateMutation = useMutation({
    mutationKey: ['community'],
    mutationFn: updateCommunity,
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleUpadateSubmit = (e) => {
    e.preventDefault();
    console.log(
      'updateNewCommunityValue',
      newCommunityValue,
    );
    communityUpdateMutation.mutate(
      newCommunityValue,
    );
    handleGoBackClick();
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
          <form onSubmit={handleUpadateSubmit}>
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
            value={title}
            onChange={handleTitleChange}
          />
          <CommunityWriteContent
            placeholder="동네 근처 이웃과 동네에서의 소소한 일상, 정보를 공유해보세요."
            onChange={handleContentChange}
            value={content}
          />
          <div>
            {data.communityImageList ? (
              data.communityImageList.map(
                (image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    style={{ width: '25px' }}
                    alt={`Image ${index}`}
                  />
                ),
              )
            ) : (
              <img
                src={selectedImage}
                style={{ width: '25px' }}
                alt="selected"
              />
            )}
            <button>X</button>
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
export default CommunityUpdate;
