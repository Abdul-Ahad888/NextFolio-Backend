const multer = require("multer")
const path = require("path")
const fs = require("fs")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = "uploads/projects";

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
        return cb("Only images allowed!", false);
    }
    cb(null, true);
};


const upload = multer({ storage })

module.exports = { upload }
