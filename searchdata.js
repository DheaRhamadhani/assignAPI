const { request, response } = require("express")
const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

// endpoint 5
app.post("/searchdata", (request,response) => {
    let keyword = request.body.keyword
    let data = [
        {nis : 101, nama :"Adinda", alamat : "Araya"},
        {nis : 102, nama :"Andika", alamat : "Sawojajar"},
        {nis : 103, nama :"Suji", alamat : "Araya"},
        {nis : 104, nama :"Dhea", alamat : "Tuban"},
        {nis : 105, nama :"Reva", alamat : "Pandaan"},
        {nis : 106, nama :"Caca", alamat : "Malang"},
        {nis : 107, nama :"Aulia", alamat : "Nganjuk"},
        {nis : 108, nama :"Debi", alamat : "Malang"},
        {nis : 109, nama :"Rara", alamat : "Malang"},
        {nis : 110, nama :"Zila", alamat : "Tangerang"}
    ]

    let found = []
    for (let i = 0; i < data.length; i++) {
        if (keyword == data[i].nis || keyword == data[i].nama || keyword == data[i].alamat) {
            
            found.push({
                nis : data[i].nis,
                nama : data[i].nama,
                alamat : data[i].alamat
            })
        }
        
    }

    return response.json({
        found
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})