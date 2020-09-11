import { dbConfig } from 'config';
import pgPromise from 'pg-promise';
import { IDatabase, IInitOptions, IMain } from 'pg-promise';

import { IExtensions, UsersRepository } from './repos';
import { RequestsRepository } from './repos/requests';

type ExtendedProtocol = IDatabase<IExtensions> & IExtensions;

/** Pg-promise initialization options */
const initOptions: IInitOptions<IExtensions> = {
  /** Extend pgp with our custom repos */
  extend(obj: ExtendedProtocol) {
    obj.requests = new RequestsRepository(obj, pgp);
    obj.users = new UsersRepository(obj, pgp);
  },
};

/** Initialize the pg-promise library */
export const pgp: IMain = pgPromise(initOptions);

/** Create the database instance with extensions */
export const db: ExtendedProtocol = pgp(dbConfig);
