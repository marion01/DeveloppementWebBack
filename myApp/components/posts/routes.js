import Posts from "./controller";
import express from "express";
import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../../data/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const data = multer({ storage: storage })
const type = data.single("photo");


const routes = express.Router();

routes.route("").get(Posts.get);
routes.route("/:id").get(Posts.getById);
routes.route("/post").post(Posts.post);
routes.route("/update").post(Posts.update);
routes.route("/image/:id").get(Posts.getImageByPostId);

export default routes;