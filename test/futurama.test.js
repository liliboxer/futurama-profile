const request = require('supertest');
const app = require('../lib/app');

describe('futurama', () => {
  it('create profile with POST', () => {
    return request(app)
      .post('/api/v1/profiles')
      .send({ 
        name: 'lili', 
        favoriteCharacter: 'Leela'
      })
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'lili', 
          favoriteCharacter: 'Leela',
          tagline: expect.any(String)
        });
      });
  });
});
