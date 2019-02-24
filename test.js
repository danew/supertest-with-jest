const request = require('supertest');

app = request('https://www.google.ca/');

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return app.get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})