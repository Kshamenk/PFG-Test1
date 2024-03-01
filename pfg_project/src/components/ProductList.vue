

<template>
  <div class="container">
    <h1 class="product-list-title">Explore Our Products :</h1>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" alt="Product Image" class="product-image">
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <p class="product-price">Price: ${{ product.price }}</p>
          <router-link :to="'/products/' + product.id" class="view-details-link">View Details</router-link>
        </div>
      </div>
    </div>
    <button type="submit" class="view-details-link" @click="goToRepository" :disabled="isButtonDisabled">
      Go to Repository
    </button>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      isButtonDisabled: false
    };
  },
  mounted() {
    
    axios.get(`${this.$backendUrl}/products`)
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  },
  methods: {
    goToRepository() {
      this.isButtonDisabled = true;
      window.location.href = 'https://github.com/Kshamenk/PFG-Test1';
      setTimeout(() => {
        this.isButtonDisabled = false;
      }, 1000);
    }
  }
}
</script>
  
<style scoped>

.product-list-title {
  font-size: 32px;
  color: #3498db;
  margin-bottom: 30px;
  text-align: center;
 
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
 
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
 background-color: rgb(240, 239, 231);
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  max-width: 100%;
  max-height: 250px;
  margin-bottom: 10px;
}

.product-details {
  text-align: left;
}

.product-price {
  font-weight: normal;
}

.view-details-link {
  color: #fff;
  background-color: #3498db;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
  margin-top: 16px;
  cursor: pointer;
}

.view-details-link:hover {
  background-color: #2980b9;
}
</style>