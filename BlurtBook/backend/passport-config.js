const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const Users = require("./models/user")

function initialize(passport, getUserUsername, getUserById){
    const authenticateUser = async (username, password, done)=>{
        const user = await getUserUsername(username)
        // console.log("\n/////// " + user.password + " ///////\n")
        // console.log("\n/////// " + user.id + " ///////\n")
        if(user == null){
            return done(null, false, {message: "user not found"})
        }

        try{
            if(await bcrypt.compare(password, user.password)){
                return done(null, user, {message: 'success'})
            } else {
                return done(null, false, {message: "wrong password"})
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({usernameField: "username"},
    authenticateUser))
    passport.serializeUser((user,done)=>{done(null,user.id)})
    passport.deserializeUser((id,done)=>{
        return done(null, getUserById(id))
    })
}

module.exports = initialize