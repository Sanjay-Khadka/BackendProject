export const connectHospitalDb = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/hospital");
    console.log("connected to hospitals db");
  } catch (error) {
    console.log("connection to hospitals db failed");
  }
};

export const userDb = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/user");
    console.log("connected to  users db");
  } catch (error) {
    console.log("connection to users db failed");
  }
};
