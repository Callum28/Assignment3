let express = require('express');
let router= express.Router();
let mongoose = require('mongoose');
let path = require('path');

//connect with task model
let task = require('../models/task')

module.exports.displaytaskList=(req,res,next)=>{
    task.find((err, tasklist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('index',{tasklist:tasklist})
        }
    });
}

module.exports.displayAddPage=(req,res,next)=>{
    res.render('add')
}

module.exports.processAddPage = (req,res,next)=>{
    let newtask = task({
        "title":req.body.title,
        "description":req.body.description,
        "due":req.body.due,
    });
    task.create(newtask,(err,task)=>{
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else{
            res.redirect('../index');
        }
    })

}

module.exports.displayEditPage = (req,res,next)=>{
    let id=req.params.id;
    let updatetask = task({
        "_id":id,
        "title":req.body.title,
        "description":req.body.description,
        "due":req.body.due,
    });
    task.updateOne({_id:id},updatetask,(err)=>{
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else{
            res.redirect('../index');
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id;
    task.findById(id,(err,taskToEdit)=>{
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else{
            res.render('edit',{title:"Edit task",task:taskToEdit});
        }
    });

}

module.exports.perfromDeleteOperation = (req,res,next)=>{
    let id=req.params.id;
    task.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else{
            res.redirect('../index');
        }

    });

}