import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import passport from "passport";
import UserModel from "../models/users.model.js";

function UserAuth() {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "Secret Key";

  passport.use(
    "user.auth",
    new Strategy(opts, function (jwt_payload, done) {
      UserModel.findById(jwt_payload.id, function (err, user) {
        if (user) {
          return done(null, user);
        } else {
          return done(err, false);
        }
      });
    })
  );
}

export default UserAuth;
