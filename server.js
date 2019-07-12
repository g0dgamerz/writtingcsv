express = require('express');
app = express();
const port = 3000;
app.set('view engine','ejs');
const csv = require('csv-parser');  
const fs = require('fs');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'our.csv',
    header: [
        {id:'name',title:'Name'},
        {id:'age',title:'Age'},
    ]
});



app.get('/',(req,res)=>{
    console.log(`server ${req.url}`);
    res.render('home');
})
app.get('/get',(req,res)=>{
    console.log(`server ${req.url}`);
    obj=req.query
    console.log(obj)
    console.log(obj.name)
    res.render('get',obj)
    let data = [];
    data.name = obj.name;
    data.age = obj.age;
    data.push(data);
    csvWriter
        .writeRecords(data)
        .then(()=> console.log('the csv file was written sucessfully'));

})




app.listen(port, () => console.log('server is running'));