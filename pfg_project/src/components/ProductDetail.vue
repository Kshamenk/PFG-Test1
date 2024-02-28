<!-- <template>
    <div>
      <h1>Product Details</h1>
      <div v-if="product">
        <img :src="product.image" alt="Product Image" style="max-width: 200px; max-height: 200px;">
        <h2>{{ product.name }}</h2>
        <p>Description: {{ product.description }}</p>
        <p>Specifications: {{ product.specifications }}</p>
        <p>Price: {{ product.price }}</p>
      </div>
      <router-link to="/products">Back to Product List</router-link>
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
          { id: 1, name: 'SmartPhone', price: 204.99, description: 'The newest Samsung cell phone for sale', specifications: '5.52 Inches, Bluetooth 5.0, 20Mpx Camera' },
          { id: 2, name: 'PlayStation5', price: 300.49, description: 'A product of Sony Enterteinments, one of the most popular videogames console worldwide', specifications: 'Specs 2' },
          
        ];
      }
    }
  }
  </script> -->

  <template>
    <div>
      <h1 class="product-details-title">Product Details</h1>
      <div v-if="product" class="product-details-container">
        <img :src="product.image" alt="Product Image" class="product-image">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-description">Description: {{ product.description }}</p>
        <p class="product-specifications">Specifications: {{ product.specifications }}</p>
        <p class="product-price">Price: {{ product.price }}</p>
      </div>
      <router-link to="/products" class="back-to-list-link">Back to Product List</router-link>
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
          { id: 1, name: 'SmartPhone', price: 204.99, description: 'The newest Samsung cell phone for sale', specifications: '5.52 Inches, Bluetooth 5.0, 20Mpx Camera', image: '/images/smartphone.jpg' },
          { id: 2, name: 'PlayStation5', price: 300.49, description: 'A product of Sony Enterteinments, one of the most popular videogames console worldwide', specifications: 'Specs 2', image: '/images/play.jpg' },
          
        ];
      }
    }
  }
  </script>
  
  <style scoped>
  .product-details-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .product-details-container {
    text-align: left;
  }
  
  .product-image {
    max-width: 200px;
    max-height: 200px;
    margin-bottom: 20px;
  }
  
  .product-name {
    font-size: 20px;
  }
  
  .product-description,
  .product-specifications,
  .product-price {
    margin-top: 10px;
  }
  
  .back-to-list-link {
    color: #3498db;
    text-decoration: none;
    margin-top: 20px;
    display: inline-block;
  }
  </style>