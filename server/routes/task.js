let express = require('express');
let router= express.Router();
let mongoose = require('mongoose');
var path = require('path');
let taskController = require('../controllers/task')

//connect with task model
let task = require('../models/task')

/*Read Operation*/
/* route for the task list*/
router.get('/',taskController.displaytaskList);
router.get('/index',taskController.displaytaskList)

module.exports=router;


/*Add Operation*/
/*Get route for displaying the Add-Page -- Create Operation*/
router.get('/add',taskController.displayAddPage);

/*Get route for processing the Add-Page -- Create Operation*/
router.post('/add',taskController.processAddPage);

/*Edit Operation*/
/*Get route for processing the Edit-Page -- Update Operation*/
router.get('/edit/:id',taskController.processEditPage);

/*Post route for dispalying the edit Operation -- Update Operation*/
router.post('/edit/:id',taskController.displayEditPage);

/*Delete Operation*/
/*Get to perform Delete operation --Deletion*/
router.get('/delete/:id',taskController.perfromDeleteOperation);

