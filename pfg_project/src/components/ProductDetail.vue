

<template>
  <div class="product-details-wrapper">
    <div v-if="product" class="product-details-container">
      <h2 class="product-name">{{ product.name }}</h2>
      <img :src="product.image" alt="Product Image" class="product-image" @click="toggleZoom" :class="{ 'zoomed': isZoomed }" />
      <p class="product-description">{{ product.description }}</p>
      <p class="product-specifications">{{ product.specifications }}</p>
      <p class="product-price">USD: ${{ product.price }}</p>
      <router-link to="/products" class="back-to-list-link">Back to Product List</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: null,
      isZoomed: false,
    };
  },
  methods: {
    fetchProductDetails() {
      const productId = this.$route.params.id;
      axios.get(`${this.$backendUrl}/products/${productId}`)
        .then(response => {
          this.product = response.data;
        })
        .catch(error => {
          console.error('Error fetching product details:', error);
        });
    },
    toggleZoom() {
      this.isZoomed = !this.isZoomed;
    },
  },
  mounted() {
    this.fetchProductDetails();
  },
  watch: {
    '$route.params.id': 'fetchProductDetails'
  }
}
</script>


<style scoped>
.product-details-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  background-color: #fff;
}

.product-details-container {
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 85%;
}

.product-image {
  max-width: 100%;
  max-height: 250px;
  border-radius: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.product-image.zoomed {
  transform: scale(1.5); 
  cursor: zoom-out;
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
