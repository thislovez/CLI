const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.listen(7777);
app.use(cors()); //จะเรียกใช้ผ่านโดเมนอื่นได้
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var curriculum = [],
Id = 1 ;

app.get('/api/curriculum' , (req,res) => {
res.send(curriculum);
console.log('Get Curriculum');
});

app.post('/api/curriculum', (req,res) =>{

  var name = req.body.name;
  curriculum.push({
    id:Id++,
    name: name
  });
  res.send(curriculum);
  console.log('New Curriculum',name);
});

app.put('/api/curriculum/:curriculums_id',  (req,res)=>{
var id = req.params.curriculums_id,
name = req.body.name;

curriculum.map(curriculums => {
if(curriculums.id == id){
  curriculums.name = name;
}
});
res.send(curriculum);
console.log('Update Curriculum' ,name);
});

app.delete('/api/curriculum/:curriculums_id' , (req,res) => {
var id = req.params.curriculums_id,
tmp = [];

curriculum.map(curriculums =>{
if (curriculums.id != id){
tmp.push(curriculums);
}
} );
curriculum = tmp;
res.send(curriculum);
console.log('Delete Curriculum' ,id );
});
