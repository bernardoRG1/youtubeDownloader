import express from "express";
import { addVideoGET, linksGET, linksPOST, addVideoPOST } from "../Controllers/linksController.js";
import {authenticateToken} from "../authenticateToken.js";

const linksRoutes = express.Router();

linksRoutes.get("/", authenticateToken ,linksGET);
linksRoutes.get("/addVideo", authenticateToken ,addVideoGET);


linksRoutes.post("/", linksPOST);
linksRoutes.post("/addVideo", addVideoPOST);

export default linksRoutes;