const multer = require("multer");

const storage = multer.memoryStorage();


const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1 * 1024 * 1024 // Limite de 1 MB (1 megabyte)
    }
});

module.exports = upload
