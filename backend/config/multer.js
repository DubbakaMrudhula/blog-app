import multer from "multer";

export const upload = multer({
  //store in RAM
  storage: multer.memoryStorage(),
  //to avoid RAM overflow
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
  //for security validation — Multer v2: throw errors instead of passing via cb
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", "Only JPG and PNG allowed"));
    }
  },
});
