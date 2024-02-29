

const express = require("express");
const path = require("path");
const app = express();
const PORT = 5173;

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S20",
    price: 204.99,
    description: "The Newest Samsungs Smartphone",
    specifications:
      "The Samsung Galaxy S20 is a premium smartphone with a sleek design (151.7 x 69.1 x 7.9 mm, 163 g) and IP68 dust/water resistance. It features a 6.2-inch Dynamic AMOLED 2X touchscreen (1440 x 3200 pixels) and a powerful camera setup (12 MP wide, 64 MP telephoto, 12 MP ultra-wide, 10 MP front). Powered by an Exynos 990 chipset (octa-core CPU, Mali-G77 MP11 GPU), it offers 128 GB storage, 12 GB RAM (expandable to 1 TB). Connectivity options include Bluetooth 5.0, Wi-Fi, NFC, and USB-C. The phone supports 5G, 2G, 3G, and 4G networks, with sensors like accelerometer, gyroscope, compass, and barometer. It houses a non-removable Li-Po 4000 mAh battery, supporting various features like Nano SIM/eSIM, no 3.5mm jack, and 4G/Wi-Fi calling.",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Play-Station 5",
    price: 300.49,
    description:
      "A product of Sony Enterteinments, one of the most popular videogames console worldwide",
    specifications:
      "Experience blazing fast loading speeds with deeper immersion thanks to the ultra-high-speed SSD, support for haptic feedback, adaptive triggers and 3D audio, and a whole new generation of amazing PlayStation games.Enjoy the power a custom CPU, GPU and SSD with integrated I/O that will redefine what a PlayStation console can do.Discover a more immersive gaming experience with support for haptic feedback, adaptive triggers, and 3D audio technology. Amazing Games: Marvel at stunning graphics and discover PS5 features",
    image: "/images/playok.jpg",
  },
];


app.use(express.static(path.join(__dirname)));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.json(products);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find(p => p.id == productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
