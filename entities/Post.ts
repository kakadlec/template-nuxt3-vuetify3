export default class Post {
  constructor(
    readonly id: string,
    readonly slug: string,
    readonly title: string,
    readonly tabcoins: number,
    readonly children_deep_count: number,
    readonly owner_username: string,
    readonly published_at: string
  ) {}
}
