const { expect } = require("chai");
const axios = require("axios");
const  {isUserExist ,addNewUser} = require( "../../dist/auth/businessLogic");
const  {isPasswordMatch} = require( "../../dist/auth/validations");

const registerUrl = "http://localhost:4100/auth/register";


describe('register test', function () {
    it('missing parameters', async ()=> {
      try{
        const res = await axios.post(registerUrl, {
          user_name: "",
          password: "",
          first_name:"",
          last_name: ""
        });
      }catch(ex){
        expect(ex.response.status).to.be.equal(500);
      }
    });


    it('user already exist', async ()=> {
        try{
          const res = await axios.post(registerUrl, {
            user_name: "gaya-shosh",
            password: "Shoshi",
            first_name:"test-test",
            last_name: "test-test"
          });
        }catch(ex){
            expect(ex.response.status).to.be.equal(404);
        }
      });



    it('adding user', async ()=> {
        try{
          const { data } = await axios.post(registerUrl, {
            user_name: "test-test",
            password: "test-test",
            first_name:"test-test",
            last_name: "test-test"
          });
          console.log(data)
        }catch(ex){
            expect(ex.response.status).to.be.equal(200);
            expect(ex.response.data).to.be.equal("seccuss");
        }finally{
          clearRegister();
        }
      });

  });
  



  const mysql2 = require("mysql2/promise");


  async function clearRegister(){
    console.log("inside clear test");
    connection = await mysql2.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Mandil01!!",
        database: "northwind",
      });

    const query = "DELETE FROM `project-vacation`.users WHERE (user_name = 'test-test');"
    console.log(query);
    const result = await connection.execute(query );
    console.log("----------deleted------------"); 
  }