const { expect } = require("chai");
const axios = require("axios");

const vacationUrl = "http://localhost:4100/vacations";
const { signToken } = require("../../dist/auth/helper");


  const token = signToken({
    first_name: 'gaya',
    last_name:"shoshani",
    user_name:"gaya-shosh",
    id:"3"
  })


describe('vacation test', function () {
    it('/GET vacations', async ()=> {
        try{
            const res = await axios.get(`${vacationUrl}?clickNumber=1`,{
                headers:{
                    authorization: token,
                }
            });
            console.log(res)
            expect(res.status).to.be.equal(200);
        }catch(ex){
            console.log(ex.statusText)
            expect(ex.response.status).to.be.equal(200);
        }
    });


    it('/GET liked vacations', async ()=> {
        try{
            const res = await axios.get(`${vacationUrl}/alllike?id=3`,{
                headers:{
                    authorization: token,
                }
            });
            console.log(res)
            expect(res.status).to.be.equal(200);
        }catch(ex){
            console.log(ex.statusText)
            expect(ex.response.status).to.be.equal(200);
        }
    });
});