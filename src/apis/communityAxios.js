import { instanceWithToken } from './axios';
import Community from '../pages/Community';

export const getCommunityList = async (
  isAsc,
  page,
) => {
  try {
    const response = await instanceWithToken.get(
      '/community',
      {
        params: { isAsc, page },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(
      'failed to fetch community data',
    );
  }
};

export const createCommunity = async (
  communityValue,
) => {
  console.log(communityValue);
  try {
    const {
      category,
      title,
      content,
      selectedImage,
      address,
    } = communityValue;

    console.log(
      'selectedImage > ',
      selectedImage,
    );

    const formData = new FormData();
    formData.append('files', selectedImage); // 이미지를 FormData에 추가

    formData.append(
      'CommunityRequestDto',
      JSON.stringify({
        category,
        title,
        content,
        address,
      }),
    );

    console.log(
      formData.get('CommunityRequestDto'),
    );

    console.log(formData.get('files'));

    // FormData에는 이미지와 JSON 데이터가 함께 포함되어 있음
    const response = await instanceWithToken.post(
      '/community',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCommunityDetail = async (id) => {
  console.log(id);
  try {
    const response = await instanceWithToken.get(
      `/community/${id}`,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCommunity = async (id) => {
  console.log(id);
  try {
    const response =
      await instanceWithToken.delete(
        `/community/${id}`,
      );
    console.log(response);
    return response;
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};

export const updateCommunity = async (data) => {
  console.log(data);
  const {
    category,
    title,
    content,
    selectedImage,
    address,
  } = data;

  console.log('selectedImage >> ', selectedImage);
  const formData = new FormData();
  formData.append('files', selectedImage); // 이미지를 FormData에 추가

  formData.append(
    'UpdateCommunityRequestDto',
    JSON.stringify({
      category,
      title,
      content,
      address,
    }),
  );
  console.log(
    formData.get('UpdateCommunityRequestDto'),
  );
  console.log('files > ', formData.get('files'));
  try {
    const response = await instanceWithToken.post(
      `/community/${data.communityId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getCommunityComment = async (
  communityId,
  isAsc,
  page,
) => {
  console.log(
    'detailList : ',
    parseInt(communityId),
  );
  try {
    const response = await instanceWithToken.get(
      `/community/${communityId}/comments`,
      {
        params: { isAsc, page },
      },
    );
    console.log('댓글 조회 ', response);
    return response;
  } catch (error) {
    throw new Error(
      'failed to fetch community data',
    );
  }
};

export const createCommunityComment = async (
  newCommentValue,
) => {
  console.log('commentValue > ', newCommentValue);
  const {
    commentContent,
    communityId,
    parentCommentId,
  } = newCommentValue.newCommentValue;

  try {
    const response = await instanceWithToken.post(
      `community/${communityId}/comment`,
      { commentContent, parentCommentId },
    );
    console.log('response >> ', response);
  } catch (error) {
    console.log(error);
  }
};
