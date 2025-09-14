<template>
  <div class="not-found-container">
    <h1>404 - Page Not Found!</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <p>You can go back to the home page by clicking the button below.</p>
    <RouterLink to="/login" class="home-button">Go to Home.</RouterLink>
  </div>
</template>

<style scoped>
.not-found-container {
  text-align: center;
  margin-top: 50px;
  font-family: sans-serif;
}

h1 {
  font-size: 4em;
  color: #333;
  margin-top: 10px;
}

p {
  font-size: 1.2em;
  color: #666;
}

.home-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1em;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #36a476;
}
</style>
