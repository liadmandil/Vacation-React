const { expect } = require("chai");
const  {isUserExist ,addNewUser} = require( "../../dist/auth/businessLogic");
const  {isPasswordMatch} = require( "../../dist/auth/validations");



describe("Login test ", () => {
  it("user not exist", () => {
      const res= isUserExist("blaabla@blavblmdc.sods").then(()=>{
        console.log(res)
        expect(res).to.be.false;
      })
  });

  it("user Exist",  () =>{
    const res=  isUserExist("lili-mand").then(()=>{
      console.log(res)
      expect(res.length).to.be.equals(1);
    })
  })


   
});

describe("password test", () => {
  it("password incorrect", () => {
    const res=  isPasswordMatch(testUserRegister ,"incurrect-password")
    console.log(res)
    expect(res).to.be.false;
  });

  it("password currect",  () =>{
    const res=  isPasswordMatch(testUserRegister  ,"testReg")
    console.log(res)
    expect(res).to.be.true;
    })
  
});



describe("register query ", () => {
  it("user already exist", () => {
    const res=  isUserExist("test").then(()=>{
      expect(res).to.be.true;
  })});


  it("missing password", () => {
    const res=  addNewUser(
      {...testUserRegister, password: null} , "incurrect-password").then(()=>{
        expect(res).to.be.false;
    
  })});

  it("missing user name", () => {
    const res=  addNewUser(
      testUserRegister.first_name,
      testUserRegister.last_name,
      user_name = null,
      testUserRegister.password , "incurrect-password").then(()=>{
        expect(res).to.be.false;
      })});

  it("missing first name", () => {
    const res=  addNewUser(
      first_name = null,
      testUserRegister.last_name,
      testUserRegister.user_name,
      testUserRegister.password , "incurrect-password").then(()=>{
        expect(res).to.be.false;
      })});

  it("missing last name ", () => {
    const res=  addNewUser(
      testUserRegister.first_name,
      last_name = null,
      testUserRegister.user_name,
      testUserRegister.password , "incurrect-password").then(()=>{
        expect(res).to.be.false;
      })});

  it("add user", () => {
    const res=  addNewUser(testUserRegister).then(()=>{
        expect(res).to.be.true;
      })});
});



const testUserRegister = {
  first_name: "testReg",
    lastName: "testReg",
    user_name: "testReg",
    password: "testReg"
}






