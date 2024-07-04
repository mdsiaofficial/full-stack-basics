
import mongoose from `mongoose`;



const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  diagonsedWith: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-",],
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true
  },
  admittedIn: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  }
}, { timestamps: true })



export const Patient = mongoose.model('Patient', patientSchema)

// https://figma.com/file/shmxWL5FKRO5GNOPPopBg6/PLAY?type=design&node-id=0-1&mode=design&t=ndPA9Qh8Wy7dRbYp-0