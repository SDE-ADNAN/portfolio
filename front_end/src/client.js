import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanity_api_token =
  "skMRyajjB2VqIuVLhI9Y8wWJYQ0A0mRb8gqCdPfk1Yp3P9ZwOa9QYNPHWl34DC89ize8VLQeieKLAOfyZCn8iOf8V6zK0CWclslpWAZrhNgq5ZPIOAtqhobjgXsMehFwbD85DLpWVIhrwicLy9gRKVBzBgLVGOteL7OedUF28X0gmXBcGVIC";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
