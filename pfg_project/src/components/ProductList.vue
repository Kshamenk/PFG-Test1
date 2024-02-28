<!-- <template>
    <div>
      <h1 class="product-list-title">Product List</h1>
      <ul class="product-list">
        <li v-for="product in products" :key="product.id" class="product-item">
          <img :src="product.image" alt="Product Image" class="product-image">
          <div class="product-details">
            <h3>{{ product.name }}</h3>
            <p class="product-price">Price: {{ product.price }}</p>
            <router-link :to="'/products/' + product.id" class="view-details-link">View Details</router-link>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'SmartPhone', price: 20.99, description: 'The newest Samsung cell phone for sale', specifications: '5.52 Inches, Bluetooth 5.0, 20Mpx Camera', image: 'public/images/smartphone.jpg' },
          { id: 2, name: 'PlayStation5', price: 300.49, description: 'A product of Sony Enterteinments, one of the most popular videogames console worldwide', specifications: 'Specs 2', image: 'public/images/play.jpg' },
        
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .product-list-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .product-list {
    list-style: none;
    padding: 0;
  }
  
  .product-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .product-image {
    max-width: 100px;
    max-height: 100px;
    margin-right: 20px;
  }
  
  .product-details {
    flex-grow: 1;
  }
  
  .product-price {
    font-weight: bold;
  }
  
  .view-details-link {
    color: #3498db;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
  }
  </style>
   -->
   <template>
    <div>
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
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Samgung Galaxy S20', price: 20.99, description: 'The newest Samsung cell phone for sale', specifications: '5.52 Inches, Bluetooth 5.0, 20Mpx Camera', image: '/images/smartphone.jpg' },
          { id: 2, name: 'Play-Station 5', price: 300.49, description: 'A product of Sony Enterteinments, one of the most popular videogames console worldwide', specifications: 'Specs 2', image: '/images/play.jpg' },
        
        ]
      };
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
    background-color: #f0f0f0;
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
}

.view-details-link:hover {
  background-color: #2980b9;
}
  </style>