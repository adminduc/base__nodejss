import express from "express";
import checkPermission, {
  checkPermissionMember,
} from "../middlewares/checkPermission";
import { create, get, getAll, remove, update } from "../controllers/user";

const router = express.Router();

router.get("/", checkPermissionMember, getAll);
router.get("/:id", get);
router.post("", checkPermission, create);
router.patch("/:id", checkPermission, update);
router.delete("/:id", checkPermission, remove);

export default router;
