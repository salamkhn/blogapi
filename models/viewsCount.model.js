import mongoose from "mongoose";

const viewsSchema=mongoose.Schema({
  blogcontent:{
    type:mongoose.Types.ObjectId,
    ref:'content'
  },
  view:{
    type:[Number,'views are required']
  },


},{timestamps:true})


const view=mongoose.model('view',viewsSchema)