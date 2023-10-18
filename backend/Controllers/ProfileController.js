const Profile = require('../Models/Profile');

const updateProfile = async (req, res) => {
    const { fname, lname,
        email,
        phone,
        gender,
        age,
        height,
        weight,
        medicalhistory,
        docurl } = req.body;

    try {
        const userToAdd = new Profile({
            fname,
            lname,
            email,
            phone,
            gender,
            age,
            height,
            weight,
            medicalhistory,
            docurl
        });
        await userToAdd.save();

        return res.status(201).json({ message: "Success" })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


const getProfile = async (req, res) => {
    try {
        const email = req.params.email;
        console.log(email);
        const result = await Profile.findOne({ email });
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

module.exports = { updateProfile, getProfile }