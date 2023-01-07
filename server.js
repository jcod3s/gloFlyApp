import express from "express";
const app = express();
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import { connectMongoDBSession} from 'connect-mongo';
const MongoStore = connectMongoDBSession(session);
import methodOverride from "method-override";
import flash from "express-flash";
import logger from "morgan";
import connectDB from "./config/database";
import mainRoutes from "./routes/main";
import searchRoutes from "./routes/search";
import postRoutes from "./routes/posts";
import commentRoutes from "./routes/comments";

//Import and use .env file in config folder
import dotenv from "dotenv"
dotenv.config({ path: "./config/.env" });

// Passport config
import passportConfig from "./config/passport"

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "awesome sawce9",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/post", postRoutes);
app.use("/search", searchRoutes);
app.use("/comments", commentRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
