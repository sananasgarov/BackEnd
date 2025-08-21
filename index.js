const express = require("express");
const app = express();
app.use(express.json());
const cars = [
  { id: 1, brand: "Toyota", model: "Camry", year: 2020 },
  { id: 2, brand: "Honda", model: "Accord", year: 2021 },
  { id: 3, brand: "Ford", model: "Mustang", year: 2019 },
  { id: 4, brand: "Chevrolet", model: "Camaro", year: 2020 },
  { id: 5, brand: "Tesla", model: "Model S", year: 2022 },
  { id: 6, brand: "Nissan", model: "Altima", year: 2021 },
];

app.get("/cars", (req, res) => {
  res.status(200).json({ cars });
});
app.post("/cars", (req, res) => {
  cars.push(req.body);
  res.status(202).json({
    message: "Car added successfully",
  });
});
app.get("/cars/:id", (req, res) => {
  const { id } = req.params;
  const foundcar = cars.find((car) => car.id == id);
  if (!foundcar) {
    res.status(404).json({ message: "Car not found" });
  } else {
    res.status(200).json({ car: foundcar });
  }
});
app.put("/cars/:id", (req, res) => {
  const { id } = req.params;
  const newcar = req.body;
  const foundcar = cars.find((car) => car.id == id);
  if (!foundcar) {
    res.status(404).json({ message: "Car not found" });
  } else {
    Object.assign(foundcar, req.body);
    res.status(200).json({ car: foundcar });
  }
  foundcar.brand = newcar.brand;
  foundcar.model = newcar.model;
  foundcar.year = newcar.year;
  res.status(200).json({
    message: "Car updated successfully",
  });
});
app.delete("/cars/:id", (req, res) => {
  const { id } = req.params;
  const foundcar = cars.find((car) => car.id == id);
  if (!foundcar) {
    res.status(404).json({ message: "Car not found" });
  } else {
    cars.splice(cars.indexOf(foundcar), 1);
    res.status(200).json({ message: "Car deleted successfully" });
  }
});
app.patch("/cars/:id", (req, res) => {
  const { id } = req.params;
  const foundCar = cars.find((car) => car.id == id);
  if (!foundCar) {
    return res.status(404).json({ message: "Car not found" });
  }
  const { brand, model, year } = req.body;
  if (brand !== undefined) foundCar.brand = brand;
  if (model !== undefined) foundCar.model = model;
  if (year !== undefined) foundCar.year = year;
  return res.status(200).json({ car: foundCar });
});

app.listen(3300, () => {
  console.log("Server is running on port 3300");
});
