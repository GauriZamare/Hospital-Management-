const Appoinment = require("../Models/Appoinment");


const bookAppoinment = async (req, res) => {
    const { fname, lname,
        phone,
        age,
        doctor_name,
        date,
        time } = req.body;

    try {
        const appoinmentToAdd = new Appoinment({
            fname, lname,
            phone,
            age,
            doctor_name,
            date,
            time,
        });
        await appoinmentToAdd.save();

        return res.status(201).json({ message: "Success" })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }

}



module.exports = { bookAppoinment }