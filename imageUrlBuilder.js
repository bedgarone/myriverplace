import myConfiguredSanityClient from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

export default function urlFor(source) {
  return builder.image(source);
}

export function galleryUrlArray(images) {
  let final_arr = [];
  images.map((img) => {
    final_arr.push({
      original: urlFor(img).url(),
      thumbnail: urlFor(img).width(150).url(),
    });
  });
  return final_arr;
}
