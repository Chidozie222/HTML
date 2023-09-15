const express = require("express");
const {google} = require("googleapis");

const app = express();


app.get("/", async(res, req) => {
    const auth = new google.auth.GoogleAuth({
        "keyFile": "Valuemize.json",
        "scopes": " https://sheets.googleapis.com/v4/spreadsheets/",
    });

    const client = await auth.getClient();

    const googleSheets =  google.sheets({"version": "v4", "auth": client });

    const spreadsheetId = "1NzAAjJSDQ4Gc08Jn5tuNHLq4A_gkh2soR8nP6EewE5M";


    const imp = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    res.status(500);
    res.send(imp);


})





app.listen(2021, (res, req) => console.log('This Port is running on 2021'))