import { db } from 'db';
import request from 'supertest';

import app from 'app';

describe('/users', () => {
  it('should return a list of users', async () => {
    const mockQuery = jest.fn();
    db.users.all = mockQuery.mockReturnValue([
      { id: 'test_id', name: 'test_name' },
    ]);
    return await request(app)
      .get('/v1/users')
      .expect('Content-Type', /json/)
      .expect(200, [{ id: 'test_id', name: 'test_name' }]);
  });
});
