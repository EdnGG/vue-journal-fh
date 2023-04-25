import "setimmediate";
import cloudinary from "cloudinary";

import uploadImage from "@/modules/daybook/helpers/uploadImage";
import axios from "axios";

cloudinary.config({
  cloud_name: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VUE_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.VUE_APP_CLOUDINARY_API_SECRET,
});

describe("Testing the uploadImage helper", () => {
  test("Must upload  the file and return the URL of the image", async () => {
    const { data } = await axios.get(
      `https://res.cloudinary.com/${process.env.VUE_APP_CLOUDINARY_CLOUD_NAME}/image/upload/v1681775567/journal-app/dg5am8pbalvnnhpjzw6t.png`,
      {
        // This is to get the image as a file
        responseType: "arraybuffer",
      }
    );

    //   This is to create a file with the data
    const file = new File([data], "photo.png");

    const url = await uploadImage(file);

    expect(typeof url).toBe("string");

    // Get the ID of the image
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".png", "");
    await cloudinary.v2.api.delete_resources(imageId);
  });
});
