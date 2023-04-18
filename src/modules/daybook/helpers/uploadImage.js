import axios from "axios";

const uploadImage = async (file) => {
  if (!file) {
    return;
  }

  try {
    const cloudUrl = "https://api.cloudinary.com/v1_1/dxzbc2qed/image/upload";

    const formData = new FormData();
    formData.append("upload_preset", "vue-course");
    formData.append("file", file);

    const { data } = await axios.post(cloudUrl, formData);

    console.log(data);
    // {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },

    return data.secure_url;

    // const resp = await fetch(cloudUrl, {
    //   method: "POST",
    //   body: formData,
    // });

    // if (resp.ok) {
    //   const cloudResp = await resp.json();
    //   return cloudResp.secure_url;
    // } else {
    //   throw await resp.json();
    // }
  } catch (error) {
    throw error.message;
  }
};

export default uploadImage;
