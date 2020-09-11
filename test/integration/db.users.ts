import { db } from 'db';

// Close db connection pool
afterAll(db.$pool.end);

describe('Users repo', () => {
  it('should return a list of all users', async () => {
    const users = await db.users.all();
    return expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ username: 'test_user_1' }),
        expect.objectContaining({ username: 'test_user_2' }),
        expect.objectContaining({ username: 'test_user_3' }),
      ]),
    );
  });
});
