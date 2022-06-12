<template>
  <div class="body" :style="switching">
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <router-link to="/" class="header__img" href="">
            <div class="header__logo" :style="logo__switching">
              <p class="header__logo-text unselectable"> DOLPHIN </p>
            </div>
          </router-link>
          <nav class="menu">
            <ul class="menu__list">
              <li class="menu__item"><router-link to="/dolphins" class="menu__link" :class="{header__white: !switcher, header__black: switcher}"> дельфины </router-link></li>
              <li class="menu__item"><router-link to="/about-project" class="menu__link" :class="{header__white: !switcher, header__black: switcher}"> о проекте </router-link></li>
              <li class="menu__item"><router-link to="/about-me" class="menu__link" :class="{header__white: !switcher, header__black: switcher}"> обо мне </router-link></li>
              <li class="menu__item">
                <button class="menu__link switch__button" @click="switch__light">
                  <svg v-if="!switcher" width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="16" rx="8" fill="white"/>
                    <ellipse cx="21.5" cy="8" rx="7.5" ry="7" fill="black"/>
                  </svg>
                  <svg v-else width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="16" rx="8" fill="black"/>
                    <ellipse cx="8.5" cy="8" rx="7.5" ry="7" fill="white"/>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <section class="first__section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switcher: true,
      switching: {
        color: 'black',
        'background-color': 'white'
      },
      logo__switching: {
        color: 'white',
        'background-color': 'black'
      }
    }
  },
  methods: {
    switch__light() {
      if (this.switcher) {
        this.switcher = false;
        this.switching.color = 'white';
        this.switching['background-color'] = 'black';
        this.logo__switching.color = 'black';
        this.logo__switching['background-color'] = 'white';
      }
      else {
        this.switching.color = 'black';
        this.switching['background-color'] = 'white';
        this.logo__switching.color = 'white';
        this.logo__switching['background-color'] = 'black';
        this.switcher = true;
      }
    }
  }
}
</script>

<style>
@import '@/assets/normalize.css';

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}
.body {
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
}
ul {
  margin: 0;
  list-style: none;
}
li {
  padding-left: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
.unselectable {
  -webkit-touch-callout: none; 
  -webkit-user-select: none;   
  -khtml-user-select: none;    
  -moz-user-select: none;      
  -ms-user-select: none;       
  user-select: none;           

}

.container {
  max-width: 1220px;
  padding: 0 10px;
  margin: 0 auto;
}

.header__img {
  max-height: 50px;
}
.header__logo {
  display: flex;
  height: 50px;
  width: 150px;
  justify-content: center;
}
.header__logo-text {
  font-weight: 900;
  font-size: 30px;
  margin: auto;
}
.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu {
  margin-right: 50px;
}
.menu__list {
  display: flex;
}
.menu__item + .menu__item {
  padding-left: 50px;
}
.menu__link {
  text-transform: uppercase;
  font-size: 14px;
}
.menu__link:hover {
  color: #aaa;
}
.header__white {
  color: white;
}
.header__black {
  color: black;
}
.switch__button {
  cursor: pointer;
}

.first__section {
  margin-top: 150px;
}

</style>
