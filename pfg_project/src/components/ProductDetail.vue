
 <!-- <template>
  <div class="product-details-wrapper">
    
    <div v-if="product" class="product-details-container">
      <h2 class="product-name">{{ product.name }}</h2>
      <img :src="product.image" alt="Product Image" class="product-image">
      <p class="product-description">{{ product.description }}</p>
      <p class="product-specifications">{{ product.specifications }}</p>
      <p class="product-price">USD: ${{ product.price }}</p>
      <router-link to="/products" class="back-to-list-link">Back to Product List</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null
    };
  },
  methods: {
    fetchProductDetails() {
      const productId = this.$route.params.id;
      this.product = this.products.find(p => p.id === parseInt(productId));
    }
  },
  mounted() {
    this.fetchProductDetails();
  },
  watch: {
    '$route.params.id': 'fetchProductDetails'
  },
  computed: {
    products() {
      return [
        { id: 1, name: 'Samsung Galaxy S20', price: 204.99, description: 'The Newest Samsungs Smartphone', specifications: 'The Samsung Galaxy S20 is a premium smartphone with a sleek design (151.7 x 69.1 x 7.9 mm, 163 g) and IP68 dust/water resistance. It features a 6.2-inch Dynamic AMOLED 2X touchscreen (1440 x 3200 pixels) and a powerful camera setup (12 MP wide, 64 MP telephoto, 12 MP ultra-wide, 10 MP front). Powered by an Exynos 990 chipset (octa-core CPU, Mali-G77 MP11 GPU), it offers 128 GB storage, 12 GB RAM (expandable to 1 TB). Connectivity options include Bluetooth 5.0, Wi-Fi, NFC, and USB-C. The phone supports 5G, 2G, 3G, and 4G networks, with sensors like accelerometer, gyroscope, compass, and barometer. It houses a non-removable Li-Po 4000 mAh battery, supporting various features like Nano SIM/eSIM, no 3.5mm jack, and 4G/Wi-Fi calling.', image: '/images/smartphone.jpg' },
        { id: 2, name: 'PlayStation5', price: 300.49, description: 'A product of Sony Enterteinments, one of the most popular videogames console worldwide', specifications: 'Experience blazing fast loading speeds with deeper immersion thanks to the ultra-high-speed SSD, support for haptic feedback, adaptive triggers and 3D audio, and a whole new generation of amazing PlayStation games.Enjoy the power a custom CPU, GPU and SSD with integrated I/O that will redefine what a PlayStation console can do.Discover a more immersive gaming experience with support for haptic feedback, adaptive triggers, and 3D audio technology. Amazing Games: Marvel at stunning graphics and discover PS5 features', image: '/images/playok.jpg' }
      ];
    }
  }
}
</script>

<style scoped>
.product-details-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #fff;
}



.product-details-container {
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%; 
}

.product-image {
  max-width: 100%;
  max-height: 250px;
  border-radius: 10px;
}

.product-name {
  font-size: 28px;
  margin-top: 16px;
}

.product-description {
  font-weight: bold;
  font-size: 19px;
}

.product-specifications {
  font-weight: normal;
  font-style: italic;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.product-price {
  margin-top: 40px;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 19px;
}

.back-to-list-link {
  color: #fff;
  background-color: #3498db;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.back-to-list-link:hover {
  background-color: #2980b9;
}
</style> -->



<template>
  <div class="product-details-wrapper">
    <div v-if="product" class="product-details-container">
      <h2 class="product-name">{{ product.name }}</h2>
      <img :src="product.image" alt="Product Image" class="product-image" @mouseover="zoomIn" @mouseout="zoomOut">
      <p class="product-description">{{ product.description }}</p>
      <p class="product-specifications">{{ product.specifications }}</p>
      <p class="product-price">USD: ${{ product.price }}</p>
      <router-link to="/products" class="back-to-list-link">Back to Product List</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      isZoomed: false
    };
  },
  methods: {
    fetchProductDetails() {
      const productId = this.$route.params.id;
      this.product = this.products.find(p => p.id === parseInt(productId));
    },
    zoomIn() {
      this.isZoomed = true;
    },
    zoomOut() {
      this.isZoomed = false;
    }
  },
  mounted() {
    this.fetchProductDetails();
  },
  watch: {
    '$route.params.id': 'fetchProductDetails'
  },
  computed: {
    products() {
      return [
        { id: 1, name: 'Samsung Galaxy S20', price: 204.99, description: 'The Newest Samsungs Smartphone', specifications: 'The Samsung Galaxy S20 is a premium smartphone with a sleek design (151.7 x 69.1 x 7.9 mm, 163 g) and IP68 dust/water resistance. It features a 6.2-inch Dynamic AMOLED 2X touchscreen (1440 x 3200 pixels) and a powerful camera setup (12 MP wide, 64 MP telephoto, 12 MP ultra-wide, 10 MP front). Powered by an Exynos 990 chipset (octa-core CPU, Mali-G77 MP11 GPU), it offers 128 GB storage, 12 GB RAM (expandable to 1 TB). Connectivity options include Bluetooth 5.0, Wi-Fi, NFC, and USB-C. The phone supports 5G, 2G, 3G, and 4G networks, with sensors like accelerometer, gyroscope, compass, and barometer. It houses a non-removable Li-Po 4000 mAh battery, supporting various features like Nano SIM/eSIM, no 3.5mm jack, and 4G/Wi-Fi calling.', image: '/images/smartphone.jpg' },
        { id: 2, name: 'Play-Station 5', price: 300.49, description: 'A product of Sony Enterteinments, one of the most popular videogames console worldwide', specifications: 'Experience blazing fast loading speeds with deeper immersion thanks to the ultra-high-speed SSD, support for haptic feedback, adaptive triggers and 3D audio, and a whole new generation of amazing PlayStation games.Enjoy the power a custom CPU, GPU and SSD with integrated I/O that will redefine what a PlayStation console can do.Discover a more immersive gaming experience with support for haptic feedback, adaptive triggers, and 3D audio technology. Amazing Games: Marvel at stunning graphics and discover PS5 features', image: '/images/playok.jpg' }
      ];
    }
  }
}
</script>

<style scoped>
.product-details-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #fff;
}

.product-details-container {
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%;
}

.product-image {
  max-width: 100%;
  max-height: 250px;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.product-image:hover {
  transform: scale(1.3);
  cursor: zoom-in;
}

.product-name {
  font-size: 28px;
  margin-top: 16px;
}

.product-description {
  font-weight: bold;
  font-size: 19px;
}

.product-specifications {
  font-weight: normal;
  font-style: italic;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.product-price {
  margin-top: 40px;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 19px;
}

.back-to-list-link {
  color: #fff;
  background-color: #3498db;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.back-to-list-link:hover {
  background-color: #2980b9;
}
</style>
