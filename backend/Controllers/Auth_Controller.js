
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");


// Controller for the adding the user 
const addUser = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;

        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res
                .status(409)
                .send({ status: "failed", msg: "Email already exists" });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({

            email: email,
            password: hashedPassword,
            isverified: false,
            resetToken: null,
            resetTokenExpiration: null,
            fname,
            lname
        });
        const useradded = await newUser.save();

        const token = jwt.sign({ userID: newUser._id }, process.env.SECRET_KEY);

        if (useradded) {
            res.send({ status: "success", msg: "User created", token: token });
        } else {
            res.status(500).send({ status: "error", msg: "Internal Server Error" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "error", msg: "Internal Server Error" });
    }
};

//  Login Controller
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        if (!user) {
            return res
                .status(401)
                .send({ status: "failed", msg: "Invalid credentials" });
        }

        const isPasswordValid =
            password && (await bcryptjs.compare(password, user.password));

        if (!isPasswordValid) {
            return res
                .status(401)
                .send({ status: "failed", msg: "Invalid credentials" });
        }

        const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY);
        req.user = user._id;
        res.send({ status: "success", msg: "Login successful", User: user, token: token });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "error", msg: "Internal Server Error" });
    }
};

// controller to get the user basic info
const getUserInfo = async (req, res) => {
    try {
        const email = req.params.email;
        console.log(email);
        const result = await User.findOne({ email });
        //console.log(result);
        if (result) {
            return res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Email doesnot exist" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

}

module.exports = { login, addUser, getUserInfo }
