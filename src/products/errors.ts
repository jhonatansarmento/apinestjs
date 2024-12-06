export class ProductAlreadyExistsError extends Error {
  constructor(slug: string) {
    super(`Product with slug ${slug} already exists`);
    this.name = 'ProductAlreadyExistsError';
  }
}
