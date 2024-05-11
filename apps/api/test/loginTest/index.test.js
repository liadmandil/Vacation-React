const { expect } = require("chai");
const axios = require("axios");
const  {isUserExist ,addNewUser} = require( "../../dist/auth/businessLogic");
const  {isPasswordMatch} = require( "../../dist/auth/validations");

const loginUrl = "http://localhost:4100/auth/login";


describe('#login password test()', function () {
  it('password incorrect', async ()=> {
    try{
      const res = await axios.post(loginUrl, {
        userName: "gaya-shosh",
        password: "incorrect"
      });
    }catch(ex){
      expect(ex.response.status).to.be.equal(401);
      expect(ex.response.data).to.be.equal("User not Authorized - Go to Hell!");
    }
  });


  it('password match', async ()=> {
    try{
      const res = await axios.post(loginUrl, {
        userName: "gaya-shosh",
        password: "Shoshani01"
      });
    }catch(ex){
      expect(ex.response.status).to.be.equal(200);
      expect(ex.response.data).to.be.equal("seccuss");
    }
  });
});


describe('#login username test()', function () {
  it('username isnt exist', async ()=> {
    try{
      const res = await axios.post(loginUrl, {
        userName: "incorrect user",
        password: "12345"
      });
    }catch(ex){
      expect(ex.response.status).to.be.equal(404);
      expect(ex.response.data).to.be.equal("User not found");
    }
  });


  it('username exist', async ()=> {
    try{
      const res = await axios.post(loginUrl, {
        userName: "gaya-shosh",
        password: "Shoshani01"
      });
    }catch(ex){
      expect(ex.response.status).to.be.equal(200);
      expect(ex.response.data).to.be.equal("seccuss");
    }
  });
});
