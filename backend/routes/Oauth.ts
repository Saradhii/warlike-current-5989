import { Router } from "express";
import passport from "passport";
import { User } from "../models/User";

export const OauthRouter = Router();
OauthRouter.get('/google',
    passport.authenticate('google', { scope: ['profile','email'] }));

OauthRouter.get('/google/callback', passport.authenticate('google'));

OauthRouter.get("/user", (req, res) => {
    res.send(req.user)
})
OauthRouter.get("/user/:id/logout", (req:any, res:any) => {
    const {id}=req.params
    User.findByIdAndDelete(id)
    res.send("deleted")
})