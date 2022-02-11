// load library express 
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

app.use(express.json())
// endpoint 1
app.post("/kubus", (request, response) => {
    // tampung data 
    let sisi = request.body.sisi

    let volume = sisi * sisi * sisi
    let luas_permukaan = 6 * (sisi * sisi)

    return response.json({
        volume: volume,
        luas_permukaan: luas_permukaan
    })
})

// endpoint 2
app.post("/bola", (request, response) => {
    // tampung data 
    let r = request.body.r

    let volume = 4/3 * 22/7 * (r * r * r)
    let luas_permukaan = 4 * 22/7* (r * r)

    return response.json({
        volume: volume,
        luas_permukaan: luas_permukaan
    })
})

// endpoint 3
app.post("/tabung", (request, response) => {
    // tampung data 
    let r = request.body.r
    let t = request.body.t

    let volume = 22/7 * (r * r) * t
    let luas_permukaan = 2 * 22/7 * r * (r + t)

    return response.json({
        volume: volume,
        luas_permukaan: luas_permukaan
    })
})

// endpoint 4
app.post("/balok", (request, response) => {
    // tampung data panjang, lebar, tinggi
    let p = request.body.p
    let l = request.body.l
    let t = request.body.t

    let volume = p * l * t
    let luas_permukaan = 2 * (p*l + p*t + l*t)

    return response.json({
        volume : volume,
        luas_permukaan : luas_permukaan
    })
})

app.listen(8000, () => {
    console.log(`server run on port 8000`);
})