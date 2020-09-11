import { RequestsRepository } from './requests';
import { UsersRepository } from './users';

/** Database Interface Extensions */
interface IExtensions {
  requests: RequestsRepository;
  users: UsersRepository;
}

export { IExtensions, UsersRepository };
