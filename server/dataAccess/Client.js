const Sequelize = require('sequelize');
let sequelize = require('./connection');

    const clients = sequelize.define('clients', {
        id: {
            type: Sequelize.STRING,
            primaryKey:true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        firstContact: {
            type: Sequelize.STRING
        },
        emailType: {
            type: Sequelize.STRING
        },
        sold: {
            type: Sequelize.BOOLEAN
        },
        owner: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        }  
    })

    //   clients.sync()

         let data = require('../../src/data.json')
    //   data.map((c)=>{
    //     clients.create({
    //         id:c._id,
    //         name: c.name,
    //         email: c.email,
    //         firstContact: c.firstContact,
    //         emailType:c.emailType,
    //         sold: c.sold,
    //         owner:c.owner,
    //         country: c.country  
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    //   })

      
module.exports = clients;

 
      
      
 


      