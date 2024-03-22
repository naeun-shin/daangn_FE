import { instance } from "./axios";

export const getCommunityList = async (isAsc, page) => {
  console.log(isAsc, page);
  try {
    const response = await instance.get("/community", {
      params: { isAsc, page },
    });
    return response.data;
  } catch (error) {
    throw new Error("failed to fetch community data");
  }
};

export const createCommunity = async (communityValue) => {
  console.log(communityValue);
  try {
    const { category, title, content, selectedImage, address } = communityValue;
    const formData = new FormData();
    formData.append("files", selectedImage); // 이미지를 FormData에 추가

    formData.append(
      "CommunityRequestDto",
      JSON.stringify({
        category,
        title,
        content,
        address,
      }),
    );

    // FormData에는 이미지와 JSON 데이터가 함께 포함되어 있음
    const response = await instance.post(
      '/community',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCommunityDetail = async (id) => {
  console.log(id);
  try {
    const response = await instance.get(
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
    const response = await instance.delete(
      `/community/${id}`,
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateCommunity = async (data) => {
  console.log(data.communityId);
  const {
    category,
    title,
    content,
    selectedImage,
    address,
  } = data;
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

  try {
    const response = await instance.post(
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