import Post from "~~/entities/Post";

export default interface PostsGateway {
  getPosts(): Promise<Post[]>;
}
