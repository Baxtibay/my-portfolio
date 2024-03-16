<template>
  <footer>
    <div class="container">
      <ul class="footer__list">
        <li class="footer__item">
          <span class="email-icon">
            <svg class="email-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" fill="currentColor"/></svg>
          </span>
          <p class="footer__text">baxtibaybekniyazov@gmail.com</p>
        </li>
        <li class="footer__item">
          <p class="footer__text">© Copyright 2024 | Designed and coded by Begniyazov</p>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="https://github.com/Baxtibay" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github" width="24" height="24"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" fill="currentColor"></path></svg>
          </a>
          <a class="footer__link" href="https://t.me/frontend_web_devel0per" target="_blank">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.06305 9.886L6.7653 14.074C7.19131 14.074 7.37581 13.891 7.59707 13.6712L9.59436 11.7625L13.733 14.7932C14.492 15.2162 15.0267 14.9935 15.2315 14.095L17.9481 1.36605L17.9488 1.3653C18.1896 0.243303 17.5431 -0.195445 16.8035 0.0798037L0.835653 6.19302C-0.254123 6.61602 -0.237622 7.22352 0.650399 7.49877L4.73275 8.76851L14.2152 2.83529C14.6615 2.53979 15.0672 2.70329 14.7335 2.99879L7.06305 9.886Z" fill="currentColor"/>
</svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {

}
</script>

<style>
footer {
  padding-top: 26px;
  padding-bottom: 26px;
  color: var(--white-color);
  background-color: var(--grey-blue);
}

.footer__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer__item {
  display: flex;
  align-items: center;
}

.footer__text {
  margin: 0;
  font-size: 14px;
}

.email-svg {
  display: block;
  margin-right: 12px;
}

.footer__link {
  display: flex;
  color: var(--white-color);
  transition: color .3s ease;
}

.footer__link:not(:last-child) {
  margin-right: 24px;
}

.footer__link:hover {
  color: var(--primary-color);
}

.footer__link:active {
  opacity: 0.6;
}

@media only screen and (max-width: 768px) {
  footer {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .footer__list {
    flex-direction: column;
  }

  .footer__item:not(:last-child) {
    margin-bottom: 8px;
  }
}

@media only screen and (max-width: 400px) {
  .footer__text {
    font-size: 12px;
  }
}
</style>