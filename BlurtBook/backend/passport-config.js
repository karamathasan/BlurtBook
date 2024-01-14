const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserById){
    const authenticateUser = async (email, password, done)=>{
        const user = getUserByEmail(email)
        if(user == null){
            return done(null, false, {message: "user not found"})
        }

        try{
            if(await bcrypt.compare(password, user.password)){
                return done(null, user, {message: 'success'})
            } else {
                return done(null, false, {message:"wrong password"})
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({usernameField:"email"},
    authenticateUser))
    passport.serializeUser((user,done)=>{done(null,user.id)})
    passport.deserializeUser((id,done)=>{
        return done(null, getUserById(id))
    })
}

module.exports = initialize