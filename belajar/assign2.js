// load library express 
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

app.use(express.json())

// endpoint pertama
app.post("/celcius",(request, response) => {
    let celcius = request.body.celcius

    let reamur = 4/5 * celcius
    let fahrenheit = 9/5 * celcius + 32
    let kelvin = celcius + 273

    return response.json({
        reamur : reamur,
        fahrenheit : fahrenheit,
        kelvin : kelvin
    })
})

// endpoint kedua
app.post("/reamur",(request, response) => {
    let reamur = request.body.reamur

    let celcius = 4/5 * reamur
    let fahrenheit = 9/4 * reamur + 32
    let kelvin = 5/4 * reamur + 273

    return response.json({
        celcius : celcius,
        fahrenheit : fahrenheit,
        kelvin : kelvin
    })
})

// endpoint ketiga
app.post("/fahrenheit",(request, response) => {
    let fahrenheit = request.body.fahrenheit

    let celcius = 5/9 * (fahrenheit - 32)
    let reamur = 4/9 * (fahrenheit - 32)
    let kelvin = 5/9 * (fahrenheit - 32) + 273 

    return response.json({
        celcius : celcius,
        reamur : reamur,
        kelvin : kelvin
    })
})

// endpoint keempat
app.post("/kelvin",(request, response) => {
    let kelvin = request.body.kelvin

    let celcius = kelvin - 273
    let reamur = 4/5 * (kelvin - 273.15)
    let fahrenheit = (kelvin - 273.15) * 9/5 + 32

    return response.json({
        celcius : celcius,
        reamur : reamur,
        fahrenheit : fahrenheit
    })
})


app.listen(8000, () => {
    console.log(`server run on port 8000`);
})