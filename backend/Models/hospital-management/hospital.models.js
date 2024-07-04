import mongoose from `mongoose`;



const hospitalSchema = new mongoose.Schema({ 
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



export const Hospital = mongoose.model('Hospital', hospitalSchema)
