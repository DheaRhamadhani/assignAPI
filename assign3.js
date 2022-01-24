// load library express
let express = require("express")
// inisiasi objek baru dari express
let app = express()

// setting agar dapat membaca data request dg
// format json
app.use(express.json())

// endpoint pertama
app.post("/decimal",(request, response) => {
    let decimal = request.body.decimal

    let binary = decimal.toString(2);
    let octal = decimal.toString(8);
    let hexadecimal = decimal.toString(16);

    return response.json({
        binary: binary,
        octal: octal,
        hexadecimal: hexadecimal
    })
})

// endpoint kedua
app.post("/binary",(request, response) => {
    let binary = request.body.binary

    let decimal = parseInt(binary, 2);
    let octal = parseInt(binary, 2).toString(8);
    let hexadecimal = parseInt(binary, 2).toString(16);

    return response.json({
        decimal: decimal,
        octal: octal,
        hexadecimal: hexadecimal
    })
})

// endpoint ketiga
app.post("/octal",(request, response) => {
    let octal = request.body.octal

    let decimal = parseInt(octal,8);
    let binary = decimal.toString(2);
    let hexadecimal = decimal.toString(16);

    return response.json({
        decimal: decimal,
        binary: binary,
        hexadecimal: hexadecimal
    })
})


// endpoint keempat
app.post("/hexadecimal",(request, response) => {
    let hexadecimal = request.body.hexadecimal

    let decimal = parseInt(hexadecimal,16);
    let binary = decimal.toString(2);
    let octal = decimal.toString(8);

    return response.json({
        decimal: decimal,
        binary: binary,
        octal: octal
    })
})

app.listen(8000, () => {
    console.log(`server run on port 8000`);
})