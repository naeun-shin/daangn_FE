import React, { useEffect, useState } from "react";
import {
  CommunityTitle,
  CommunityContent,
  CommunityImage,
  Container,
  CommunityBox,
  CommunitySubBox,
  CommunityContainer,
  Header,
} from "../CommunityStyles";
import { useNavigate } from "react-router-dom";
import { GoThumbsup } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { getCommunityList } from "../../apis/communityAxios";

const CommunityList = () => {
  const navigate = useNavigate();
  const [isAsc, setIsAsc] = useState(true);
  const [page, setPage] = useState(1);
  const [contentArray, setContentArray] = useState([]);

  const handleGoToDetailClick = () => {
    navigate("/CommunityDetail");
  };

  const { data } = useQuery({
    queryKey: ["community", isAsc, page],
    queryFn: () => getCommunityList(isAsc, page),
  });

  useEffect(() => {
    if (data && data.data) {
      const pageNation = data.data.pageable;
      const contentArray = data.data.content;
      // console.log(pageNation);
      // console.log(contentArray);
      setContentArray(contentArray);
    }
  }, [data]); // data가 변경될 때마다 useEffect가 호출되어 업데이트됩니다.

  return (
    <>
      <Header />
      <Container>
        {contentArray.map((item) => (
          <>
            <CommunityContainer key={item.id} onClick={handleGoToDetailClick}>
              <CommunityBox>
                <div>
                  <CommunityTitle>{item.title}</CommunityTitle>
                  <CommunityContent>{item.content}</CommunityContent>
                </div>
                {!item.communityImage ? null : (
                  <CommunityImage src={item.communityImage.url} />
                )}
              </CommunityBox>
              <CommunitySubBox>
                <CommunitySubBox>
                  <div>{item.address}</div> &nbsp;
                  <div>{item.createdAt}</div> &nbsp;
                  <div>조회 </div>
                </CommunitySubBox>
                <CommunitySubBox>
                  <GoThumbsup /> &nbsp;
                  <IoChatbubbleOutline />
                </CommunitySubBox>
              </CommunitySubBox>
            </CommunityContainer>
          </>
        ))}
      </Container>
    </>
  );
};

export default CommunityList;
