<template>
  <div class="menu">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link :to="{ name: 'home' }">
            <li class="nav-item">
              <a class="nav-link" href="#"
                >Главная <span class="sr-only">(current)</span></a
              >
            </li></router-link
          ><router-link :to="{ name: 'AboutUs' }">
            <li class="nav-item">
              <a class="nav-link" href="#">О нас</a>
            </li></router-link
          >
          <router-link :to="{ name: 'enter' }">
            <li class="nav-item">
              <a class="nav-link" href="#">Выйти</a>
            </li></router-link
          >
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">

</style>
