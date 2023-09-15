const express = require('express')
const {google} = require('googleapis');
const Valuemize = require('./valuemize.json');



const app = express();




const client = new google.auth.JWT(
    Valuemize.client_email, 
    null, 
    Valuemize.private_key, 
    ['https://www.googleapis.com/auth/spreadsheets']  
);



client.authorize(function(err, tokens){
    if(err){
        console.log(err);
        return;
    } else{
        console.log('connected');
    }
});


app.get('/NG', async(req, res) =>{


    const gapi = google.sheets({'version':'v4', 'auth': client});


    const opt = {
        'spreadsheetId': '1NzAAjJSDQ4Gc08Jn5tuNHLq4A_gkh2soR8nP6EewE5M',
         "range" : 'NG'
    };


    let data = await gapi.spreadsheets.values.get(opt);
    console.log(data.data.values);
    res.send(data.data.values);

})
app.get('/IC', async(req, res) =>{


    const gapi = google.sheets({'version':'v4', 'auth': client});


    const opt = {
        'spreadsheetId': '1NzAAjJSDQ4Gc08Jn5tuNHLq4A_gkh2soR8nP6EewE5M',
         "range" : 'IC'
    };


    let data = await gapi.spreadsheets.values.get(opt);
    console.log(data.data.values);
    res.send(data.data.values);

})
app.get('/EG', async(req, res) =>{


    const gapi = google.sheets({'version':'v4', 'auth': client});


    const opt = {
        'spreadsheetId': '1NzAAjJSDQ4Gc08Jn5tuNHLq4A_gkh2soR8nP6EewE5M',
         "range" : 'EG'
    };


    let data = await gapi.spreadsheets.values.get(opt);
    console.log(data.data.values);
    res.send(data.data.values);

})
app.get('/MW', async(req, res) =>{


    const gapi = google.sheets({'version':'v4', 'auth': client});


    const opt = {
        'spreadsheetId': '1NzAAjJSDQ4Gc08Jn5tuNHLq4A_gkh2soR8nP6EewE5M',
         "range" : 'MW'
    };


    let data = await gapi.spreadsheets.values.get(opt);
    console.log(data.data.values);
    res.send(data.data.values);

})
app.get('/Zw', async(req, res) =>{


    const gapi = google.sheets({'version':'v4', 'auth': client});


    const opt = {
        'spreadsheetId': '1NzAAjJSDQ4Gc08Jn5tuNHLq4A_gkh2soR8nP6EewE5M',
         "range" : 'Zw'
    };


    let data = await gapi.spreadsheets.values.get(opt);
    console.log(data.data.values);
    res.send(data.data.values);

})
app.get('/UG', async(req, res) =>{


    const gapi = google.sheets({'version':'v4', 'auth': client});


    const opt = {
        'spreadsheetId': '1NzAAjJSDQ4Gc08Jn5tuNHLq4A_gkh2soR8nP6EewE5M',
         "range" : 'UG'
    };


    let data = await gapi.spreadsheets.values.get(opt);
    console.log(data.data.values);
    res.send(data.data.values);

})
app.get('/TZ', async(req, res) =>{


    const gapi = google.sheets({'version':'v4', 'auth': client});


    const opt = {
        'spreadsheetId': '1NzAAjJSDQ4Gc08Jn5tuNHLq4A_gkh2soR8nP6EewE5M',
         "range" : 'TZ'
    };


    let data = await gapi.spreadsheets.values.get(opt);
    console.log(data.data.values);
    res.send(data.data.values);

})



app.listen(2000, ()=> console.log('This api is running on port 2000'))