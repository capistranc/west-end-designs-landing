import axios from "axios";

const url = "https://www.instagram.com/teslamotors/";

export async function getPosts() {
  const posts = await axios.get(url);

  return posts;
}
