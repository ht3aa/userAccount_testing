const app = require('app.js')
const request = require('supertest')


describe("Create User Post request", () => {
  it(`should check if "createUserFile" exists in "src/services" directory`, async () => {
    const response = await request(app).post("/CreateUser").send({ 
        userName: "TestUserName", 
        PhoneNumber : "testPhoneNumber",
        Email : "testEmail",
        password: "TestPassword" 
      }).set('Accept', 'application/json')

      expect(response.statusCode).toBe(200)
  })});
 