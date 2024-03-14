import express from "express";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
const app = express();


//----to upload single file
// const upload = multer({
//     dest:"uploads/"
// });
// app.post("/upload",upload.single("file"),(req,res)=>{
//     res.json({
//         status:"success"
//     });
// });

//----to upload multiple files
// const upload = multer({
//     dest:"uploads/"
// });
// app.post("/upload",upload.array("file",2),(req,res)=>{
//     res.json({
//         status:"success"
//     });
// });

//---- to upload multiple files with different field names
// const upload = multer({
//     dest:"uploads/"
// });

// const multiUpload = upload.fields([
//     {name:"avatar",maxCount:1},
//     {name:"resume",maxCount:1}
// ]);

// app.post("/upload",multiUpload,(req,res)=>{
//     console.log(req.files);
//     res.json({
//         status:"success"
//     });
// });

// ----to upload files with  CUSTOM NAMES
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads");
    },
    filename:(req,file,cb)=>{
        // console.log(file);
        const {originalname}=file;
        cb(null, `${uuidv4()}-${originalname}`);
    }
})

//to allow only images to get uploaded
const fileFilter = (req,file,cb)=>{
    
    if(file.mimetype.split("/")[0]==="image"){  //["image","jpeg"]
        cb(null,true);
    }else{
        // cb(null,false);
        cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"),false);
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits:{fileSize:1024*1024*10,files:2}
});
app.post("/upload",upload.array("file"),(req,res)=>{
    console.log(req.files);
    res.json({
        status:"success"
    });
});

// to handle error 
app.use((error,req,res,next)=>{
    if(error instanceof multer.MulterError){
        if(error.code==="LIMIT_FILE_SIZE"){
            res.status(400).json({
                message:"File too large!"
            });
        }
        if(error.code==="LIMIT_FILE_COUNT"){
            res.status(400).json({
                message:"File limit reached!"
            });
        }
        if(error.code==="LIMIT_UNEXPECTED_FILE"){
            res.status(400).json({
                message:"Unexpected file type! Please upload image file."
            });
        }
    }
});

app.listen(4000,()=>{
    console.log("Server is listening on port 4000.");
})