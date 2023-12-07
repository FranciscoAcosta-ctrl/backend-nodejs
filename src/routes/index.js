import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("index", {title: 'Param from backend'});
});

router.get("/about", (req, res) => {
  res.send("https://dev-watcher.netlify.router/");
});

router.get("/code", (req, res) => {
  res.send("https://github.com/FranciscoAcosta-ctrl");
});
/*
router.get("/*", (req, res) => {
  res.send("404");
});*/

export default router;
