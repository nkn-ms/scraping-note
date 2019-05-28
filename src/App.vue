<template>
  <div id="app">
    <h1>scraping note</h1>
    <a
      href="https://github.com/nkn-ms/heroku-puppeteer-note"
      target="_blank"
      rel="noopener noreferrer"
      class="src"
    >source code</a>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 600px;
  margin: auto;
}

.src {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
