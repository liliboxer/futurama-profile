const request = require('supertest');
const app = require('../lib/app');

describe('futurama', () => {
  it('create profile with POST', () => {
    return request(app)
      .post('/api/v1/profiles')
      .send({ 
        name: 'lili', 
        favoriteCharacter: 'lila'
      })
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'lili', 
          favoriteCharacter: 'lila'
        });
      });
  });
});
