import Post from "~~/entities/Post";
import HttpClient from "~~/infra/HttpClient";
import PostsGateway from "./PostsGateway";

export default class PostsHttpGateway implements PostsGateway {
  constructor(readonly httpClient: HttpClient, readonly baseURL: string) {}

  async getPosts(): Promise<any> {
    const postsData = await this.httpClient.get(`${this.baseURL}/api/v1/contents/kakadlec`);
    const posts: Post[] = [];
    for (const postData of postsData) {
      posts.push(new Post(postData.id, postData.title));
    }
    return posts;
  }
}
