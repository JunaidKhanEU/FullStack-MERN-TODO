const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TodoModel = require('./model/todoModel');

mongoose.connect("mongodb://localhost:27017/todos", { useNewUrlParser: true })
.then(()=>{
    console.log("Mongodb connection is established");
}).catch(err=>console.log("Error in DB", err));


router.get('/', (req, res)=>{

    TodoModel.find().then((todos)=>{
        res.send((todos));

    }).catch(err=>{
        res.status(400).send({ErrorMessage:"Search Failed",err:err.message});
        
    })
   
    
});

router.get('/:id', (req, res)=>{

  let id = req.params.id;
  
   TodoModel.findById(id).then((item)=>{
        res.send(item);
    }).catch((err)=>{

        res.status(404).send({ErrorMessage:"ID WRONG",err:err.message});
       
    })
    

});

router.post('/add', (req, res)=>{
   
    TodoModel.create(req.body).then((item)=>{
        res.status(200).send({message:"sucessfully added",item:item});
    }).catch((err)=>{
        res.status(404).send({ErrorMessage:"Wrong Request or Wrong Data Type",err:err.message});
    })
});


router.delete('/delete/:id',(req, res)=>{
    let id = req.params.id;

    TodoModel.findByIdAndRemove({_id:id}).then((item)=>{
        res.send({message:"sucessfully deleted",item:item})
    }).catch(err=>{
        res.status(404).send({ErrorMessage:"Wrong ID not Deleted",err:err.message});
    });
});



router.put('/update/:id', (req, res, next)=>{
    let id = req.params.id;
    TodoModel.findByIdAndUpdate({_id:id}, req.body).then(item=>{
        TodoModel.find({_id:id}).then(newItem=>res.send({message:"sucessfully Updated",item:newItem})).catch(next)

    }).catch(err=>{
        res.status(404).send({ErrorMessage:"Wrong ID not updated",err:err.message});
    })
});




module.exports = router;