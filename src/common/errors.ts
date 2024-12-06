export class NotFoundError extends Error {
  constructor(entity: string, key: string, attribute: string = 'id') {
    super(`The ${entity} with ${attribute} ${key} was not found`);
  }
}
