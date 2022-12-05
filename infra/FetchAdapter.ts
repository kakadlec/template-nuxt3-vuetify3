import HttpClient from "./HttpClient";

export default class FetchAdapter implements HttpClient {
  async get(url: string): Promise<any> {
    return await $fetch(url);
  }
  async post(url: string, body: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
