import Post from "~~/entities/Post";
import HttpClient from "~~/infra/HttpClient";
import PostsGateway from "./PostsGateway";

export default class PostsHttpGateway implements PostsGateway {
  constructor(readonly httpClient: HttpClient, readonly baseURL: string) {}

  async getPosts(): Promise<any> {
    const postsData = await this.httpClient.get(`${this.baseURL}/api/v1/contents`);
    const posts: Post[] = [];
    for (const postData of postsData) {
      posts.push(
        new Post(
          postData.id,
          postData.slug,
          postData.title,
          postData.tabcoins,
          postData.children_deep_count,
          postData.owner_username,
          postData.published_at
        )
      );
    }
    return posts;
  }
}
