import axios from "axios";

const url = "https://www.reddit.com/";

export async function getPosts() {
  const posts = await axios.get(url);

  return posts;
}
