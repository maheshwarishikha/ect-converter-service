const express = require("express");
const app = express();

const to_roman = require("./converter/number2Roman");
const to_number = require("./converter/roman2Number");

app.get("/", (req, res) => {
    console.log("/");
    res.json({ message: "Converter Service!" });
});

app.get("/to-roman", async (req,res) => {
    console.log("/to-roman");
    console.log("Input Number:", req.query.value);
    let input = parseInt(req.query.value);
    // console.log((req.query.value).match(/^[a-z]+$/));

    if ( req.query.value == null ) {
        console.log("Invalid input");
        res.sendStatus(400);
    } else if (input < 0 || input > 3999 || !Number.isInteger(input)) {
        console.log("Invalid input");
        res.sendStatus(400);
    } else if ( input === 0 ) {
        res.send('nulla');
    } else {
        var response = await to_roman.convertNumber2Roman(parseInt(req.query.value));
        console.log("Converted Roman Number:", response);
        res.send(response);
    }
});

app.get("/to-number", async (req,res) => {
    console.log("/to-number");
    console.log("Input Roman Number:", req.query.value);
    let input = req.query.value;
    let result = input.match(/[^IVXLCDM]/g);
    if (result != null) {
        console.log("Invalid input");
        res.sendStatus(400);
    } else if ( input.match(/[I]{4}|[V]{4}|[X]{4}|[L]{4}|[C]{4}|[D]{4}|[M]{4}/g) != null ) { 
        console.log("Invalid input");
        res.sendStatus(400);
    } else {
        var response = await to_number.convertRoman2Number(input);
        console.log("Converted Number:", response);
        res.json(response);
    }
});

app.listen(3000, () => {
    console.log("Server is running at 3000");
});