const express = require('express');
const bodyParser = require('body-parser');
let Client = require('../dataAccess/Client');
const Api = express.Router();
let id = 90


Api.get('/clients', (req, res) => {
    Client.findAll({}).then(Client => {
        res.send(Client)
    })
        .catch(err => {
            res.status(500).send(err);
        })
});

Api.get(`/actions/:name`, (req, res) => {
    let name = req.params.name;
    Client.findAll({
        attributes: ['name', 'owner', 'id'],
        where: {
            name: `${name}`
        }
    })
        .then(client => {
            console.log(client)
            res.send(client)
        })
        .catch(err => {
            res.status(500).send(err);
        })
})



Api.put('/clients/:id', (req, res) => {
    let id = req.params.id;
    let UpdateData = req.body;  //{ name:`${name}`,country:`${Nclient.country}` }
    Client.update(
        {
            name: `${UpdateData.name}`,
            country: `${UpdateData.country}`
        },
        {
            where: {
                id: `${id}`
            }
        }).then(client => {
            res.status(201).send(client)
        })
        .catch(err => {
            res.status(500).send(err);
        })
        
})

Api.put(`/actions/email/:id`, (req, res) => {
    let id = req.params.id;
    let UpdateData = req.body;
    Client.update(
        {
            emailType: `${UpdateData.email}`,
        },
        {
            where: {
                id: `${id}`
            }
        }).then(client => {
            res.status(201).send(client)
        })
        .catch(err => {
            res.status(500).send(err);
        })
})

Api.put(`/actions/owner/:id`, (req, res) => {
    let id = req.params.id;
    let UpdateData = req.body;
    Client.update(
        {
            owner: `${UpdateData.owner}`,
        },
        {
            where: {
                id: `${id}`
            }
        }).then(client => {
            res.status(201).send(client)
        })
        .catch(err => {
            res.status(500).send(err);
        })
})

Api.put(`/actions/sale/:id`, (req, res) => {
    let id = req.params.id;
    let UpdateData = req.body;
    Client.update(
        {
            sold: `${UpdateData.sale}`,
        },
        {
            where: {
                id: `${id}`
            }
        }).then(client => {
            res.status(201).send(client)
        })
        .catch(err => {
            res.status(500).send(err);
        })
})


Api.post(`/actions/newclient`, (req, res) => {
    let NewClient = req.body;
    Client.create({
        id: id,
        name: `${NewClient.name}`,
        email: `${NewClient.email}`,
        owner: `${NewClient.owner}`,
        country: `${NewClient.country}`,
        firstContact: new Date().toISOString(),
        sold: false,
        emailType: null
    })
        .then(client => {
            id++;
            res.status(201).send(client)
            console.log(client)
        })
        .catch(err => {
            res.status(500).send(err);
        })
})



module.exports = Api;