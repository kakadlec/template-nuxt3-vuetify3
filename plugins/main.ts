import PostsHttpGateway from "~~/gateways/PostsHttpGateway";
import FetchAdapter from "~~/infra/FetchAdapter";

export default defineNuxtPlugin(() => {
  const httpClient = new FetchAdapter();
  const postsGateway = new PostsHttpGateway(httpClient, "https://www.tabnews.com.br");
  return {
    provide: {
      postsGateway,
    },
  };
});
