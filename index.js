const fs = require('fs');
//Read method
fs.readFile("note.txt",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})


//write method  \r\n to make a new line
fs.writeFile("note.txt","hi titan how are you ?\r\n",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("new file updated")
    }
})

//make new folder
fs.mkdir("new ",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("new folder created successfully")
    }
})

//delete folder
//make new folder
fs.rmdir("new ",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("new folder deleted successfully")
    }
})

//make delete file
fs.unlink("note.txt",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("new file deleted successfully")
    }
})