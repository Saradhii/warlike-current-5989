import passport from "passport";
import { User } from "../models/User";

var GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID="481350807239-52i9brkh6vlr2h1vkhuavppvug8p56fr.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="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"
passport.serializeUser((user:any,done)=>{
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    User.findById(id).then((res)=>done(null,res))
})
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken:string, refreshToken:string, profile:any, cb:any) {
    User.findOne({googleID:profile.id})
    .then((res)=>{
        if(res){
            cb(null,res)
        }
        else{
            new User({googleID:profile.id}).save()
            .then((res)=>{
                cb(null,res)
            })
        }
    })
  }
  ));