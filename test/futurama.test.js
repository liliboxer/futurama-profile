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
  it('get profile', () => {
    return request(app)
      .get('/api/v1/profiles')
      .then(res => {
        expect(res.body).toEqual([{ 
          name: 'lili', 
          favoriteCharacter: 'Leela',
          tagline: expect.any(String)
        }]);
      });
  });
  it('get profile by index', () => {
    return request(app)
      .get('/api/v1/profiles/0')
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'lili', 
          favoriteCharacter: 'Leela',
          tagline: expect.any(String)
        });
      });
  });
  it('update favorite character only', () => {
    return request(app)
      .patch('/api/v1/profiles/0')
      .send({ 
        favoriteCharacter: 'Bender'
      })
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'lili', 
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        });
      });
  });
  it('deletes a profile by index', () => {
    return request(app)
      .delete('/api/v1/profiles/0')
      .then(res => {
        // send back the object that was deleted
        expect(res.body).toEqual({
          name: 'lili', 
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        });
      });
  });
  
});


