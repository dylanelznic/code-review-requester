import { ColumnSet, IDatabase, IMain } from 'pg-promise';

import { Request } from '../models';
import { requests as sql } from '../sql';
import { ResponseError } from 'utils';

/** DB access for the Requests table */
export class RequestsRepository {
  /** Read-only structure with query-formatting columns */
  cs: ColumnSet;

  /**
   * @param db - Automated database connection context/interface.
   * @param pgp - Pg-promise root
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(private db: IDatabase<any>, private pgp: IMain) {
    this.cs = new pgp.helpers.ColumnSet(
      ['id', 'username', 'display_name', 'bio', 'created_at', 'updated_at'],
      {
        table: 'requests',
      },
    );
  }

  /** Select all Requests, returning a list of Requests */
  all = async (): Promise<Request[]> => {
    try {
      return await this.db.manyOrNone(sql.all);
    } catch (e) {
      throw new ResponseError(e.message, 500);
    }
  };
}
