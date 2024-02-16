import express from "express";
import { deletePOST } from "../Controllers/deleteController.js";

const deleteRoutes = express.Router();

deleteRoutes.post('/', deletePOST);

export default deleteRoutes;