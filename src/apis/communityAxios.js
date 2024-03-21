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
    console.log(formData.get("files"));
    // JSON 데이터를 FormData에 추가
    formData.append(
      "CommunityRequestDto",
      JSON.stringify({
        category,
        title,
        content,
        address,
      }),
    );
    console.log(formData.get("CommunityRequestDto"));
    // FormData에는 이미지와 JSON 데이터가 함께 포함되어 있음

    const response = await instance.post("/community", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
