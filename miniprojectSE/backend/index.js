const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://jaynikhade1:0wihpCZdrfdQz0vs@project1.o8dlx.mongodb.net/hospitalDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

const doctorSchema = new mongoose.Schema({
    name: String,
    doctorId: Number,
    specialization: String,
    gender: String,
    timing: String,
    mobile: String
});

const patientSchema = new mongoose.Schema({
    name: String,
    patientId: Number,
    gender: String,
    dob: String,
    mobile: String,
    address: String,
    assignedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    roomNumber: Number
});

const Doctor = mongoose.model('Doctor', doctorSchema);
const Patient = mongoose.model('Patient', patientSchema);

app.post('/api/doctor', async (req, res) => {
    const { name, doctorId, specialization, gender, timing, mobile } = req.body;
    const newDoctor = new Doctor({ name, doctorId, specialization, gender, timing, mobile });
    await newDoctor.save();
    res.json({ message: 'Doctor added successfully!' });
});

app.post('/api/patient', async (req, res) => {
    const { name, patientId, gender, dob, mobile, address } = req.body;

    const doctors = await Doctor.find();
    if (doctors.length === 0) {
        return res.status(400).json({ message: 'No doctors available' });
    }
    const randomDoctor = doctors[Math.floor(Math.random() * doctors.length)];

    const randomRoomNumber = Math.floor(Math.random() * 20) + 1;

    const newPatient = new Patient({
        name, patientId, gender, dob, mobile, address,
        assignedDoctor: randomDoctor._id,
        roomNumber: randomRoomNumber
    });

    await newPatient.save();

    res.json({
        message: 'Patient added successfully!',
        doctorAssigned: randomDoctor.name,
        roomNumber: randomRoomNumber
    });
});
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
