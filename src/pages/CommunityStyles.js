import styled from "styled-components";
import bear from "../images/bear.png";
import TEST1 from "../images/TEST1.jpg";

const Header = styled.div`
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  /* border: 1px solid black; */
  /* padding-bottom: 5px; */
  font-weight: bold;
  button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-weight: bold;
  }
`;
const CommunityWrapper = styled.div`
  overflow: auto;
`;

const Container = styled.div`
  padding: 10px;
  /* border: 1px solid black; */
`;

const CommunityContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
`;

const CommunityTitle = styled.div`
  font-size: 18px;
  padding: 5px 0px;
`;

const CommunityContent = styled.div`
  font-size: 14px;
  color: gray;
`;

const CommunityImage = styled.img`
  padding-top: 5px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  float: right;
`;

const CommunityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommunitySubBox = styled.div`
  padding-top: 5px;
  color: gray;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
`;

const CommunitySubBoxLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommunityDetailBox = styled.div`
  display: flex;
  margin: 5px 0px;
  /* border: 1px solid black; */
`;

const CommumnityDetailHeaderSub = styled.div`
  font-size: 12px;
  color: gray;
`;

const CommunityDetailCnt = styled.div``;

const UserImage = styled.div`
  background-image: url(${bear});
  background-size: cover;
  width: 30px;
  height: 30px;
  /* border: 1px solid black; */
  border-radius: 50px;
  margin-right: 5px;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;
const CommunityDetailTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CommunityDetailContent = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;

const CommunityCountBox = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  font-size: 14px;
`;

const CommunityDetailLikeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 5px;
`;

const CommunityDetailLikeAndSave = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 20px;
  /* width: 65px; */
  height: 30px;
  font-size: 12px;
  padding: 0px 20px;
  justify-content: center;
`;

const CommunityDetailCommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;
const CommunityDetailFirstCommentBox = styled.div`
  padding: 10px;
  /* border: 1px solid black; */
`;

const CommunityLike = styled.div`
  font-size: 12px;
  color: gray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-top: 10px;
`;

const CommunityDetailFirstComment = styled.div`
  margin: 5px 0px 0px 35px;
`;
const CommunityDetailSecondCommentBox = styled.div`
  padding: 10px;
  margin-left: 35px;
`;

const CommunityWriteBox = styled.div``;
const CommunityWriteCategory = styled.div``;

const CommunityCateogyList = styled.div``;
const CommunityWriteTitle = styled.input`
  width: 97%;
  height: 5vh;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 3px;
  border: none;
  :focus {
    outline-color: #ff6f0f;
  }
`;

const CommunityWriteContent = styled.textarea`
  display: flex;
  align-items: center;
  width: 97%;
  height: 70vh;
  font-size: 16px;
  color: gray;
  padding: 5px 3px;
  resize: none;
  line-height: 1.5;
  border: none;
`;

const CommunityWriteFooter = styled.div`
  display: flex;
  align-items: center;
  height: 2vh;
  padding: 5px 0px;
  p {
    font-size: 12px;
  }
  label {
    display: flex;
    justify-items: center;
    align-items: center;
  }
  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;

  input {
    border-radius: 15px;
    border-style: none;
    background-color: #d3d3d359;
    padding: 10px 7px;
    width: 70%;
  }
`;

const FooterLeft = styled.div`
  margin-left: 5px;
`;
const CommunityDetailImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  border-radius: 10px;
  width: 100%;
  margin: 5px 0px;
`;
export {
  Header,
  Container,
  CommunityWrapper,
  CommunityContainer,
  CommunityTitle,
  CommunityContent,
  CommunityImage,
  CommunityBox,
  CommunitySubBox,
  CommunitySubBoxLeft,
  CommunityDetailBox,
  CommumnityDetailHeaderSub,
  CommunityDetailCnt,
  CommunityDetailTitle,
  CommunityDetailContent,
  CommunityDetailCommentHeader,
  CommunityCountBox,
  CommunityDetailLikeAndSave,
  CommunityDetailFirstCommentBox,
  CommunityDetailFirstComment,
  CommunityDetailSecondCommentBox,
  CommunityDetailImage,
  CommunityLike,
  UserImage,
  CommunityDetailLikeBox,
  CommunityWriteTitle,
  CommunityWriteContent,
  CommunityWriteFooter,
  CommunityWriteBox,
  UserName,
  CommunityWriteCategory,
  CommunityCateogyList,
  Footer,
  FooterLeft,
};
