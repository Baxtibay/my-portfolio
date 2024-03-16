<template>
  <header class="site-header">
    <div class="site-header__container container">
      <routerLink class="site-header__logo logo" to="/">
        <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" width="61" height="32" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M31.347 26.122 15.673 0 0 26.122h31.347ZM60.082 5.878 44.408 32 28.735 5.878h31.347Z" clip-rule="evenodd"/></svg>
      </routerLink>
      <div class="site-header__sitenav">
        <nav class="sitenav">
          <span class="sitenav-top"></span>
          <ul class="sitenav__list">
            <li class="sitenav__item">
              <routerLink to="/" class="sitenav__link">Home</routerLink>
            </li>
            <li class="sitenav__item">
              <routerLink to="/portfolio" class="sitenav__link">Portfolio</routerLink>
            </li>
            <li class="sitenav__item">
              <routerLink to="/contact" class="sitenav__link">Contact me</routerLink>
            </li>
          </ul>
        </nav>
        <button class="close-sitenav-button" type="button">
          <span class="close-sitenav-button-inner">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="currentColor"/></svg>
          </span>
        </button>
      </div>
      <button class="site-header__sitenav-toggler" type="button">
        <span class="site-header__sitenav-toggler-inner">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="28px" height="28px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" fill="currentColor"/></svg>
        </span>
      </button>
    </div>
  </header>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {

}
</script>
<style>
/* HEADER */
.icon {
  color: var(--primary-color);
  width: 24px;
}
header {
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  border-bottom: 1px solid var(--primary-color);
}

.site-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  color: var(--primary-color);
}

.logo:hover {
  opacity: 0.8;
}


/* SITENAV */
.sitenav {
  text-transform: uppercase;
}

.sitenav__list {
  display: flex;
  justify-content: end;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sitenav__item:not(:last-child) {
  margin-right: 33px;
}
.sitenav__link {
  color: var(--black-100);
  font-weight: 600;
  text-decoration: none;
}

.sitenav__link:hover {
  opacity: 0.7;
}

.sitenav__link:active {
  color: var(--primary-color);
  opacity: 0.6;
}

.sitenav__link.router-link-exact-active {
  color: var(--primary-color);
}


/* CLOSE-BUTTON */
.close-sitenav-button {
  display: none;
  padding: 0;
  border: none;
  border-radius: 4px;
  color: var(--primary-color);
  background-color: transparent;
  cursor: pointer;
}

.close-sitenav-button:active {
  transform: scale(0.8);
}

.close-sitenav-button-inner {
  display: flex;
}


@media only screen and (max-width: 768px) {
  .site-header {
    padding-top: 16px;
    padding-bottom: 16px;
    position: relative;
    z-index: 1;
  }

  .site-header__sitenav {
    display: none;
  }

  /* NAVBAR-CLOSE-BUTTON */
  .close-sitenav-button {
    display: block;
    position: absolute;
    top: 5px;
    right: 15px;
  }

  .site-header__sitenav-toggler {
    display: block;
  }

  .site-header--open .site-header__sitenav {
    position: absolute;
    z-index: 1;
    display: block;
    top: 100%;
    right: 0;
    width: 250px;
    padding: 40px 20px;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 0 2px;
    transition: all 1s ease;
  }

  .sitenav__list {
    flex-direction: column;
    align-items: start;
  }

  .sitenav__item {
    width: 100%;
    padding: 8px 10px;
    background-color: #fff;
    border-top: 1px solid var(--primary-color);
  }

  .sitenav__item:last-child {
    border-bottom: 1px solid var(--primary-color);
  }

}
</style>