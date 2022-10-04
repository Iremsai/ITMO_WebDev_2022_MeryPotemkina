import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <!--<div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>-->
  <h1>Привет, мир!</h1>
  <h2>Привет, мир!</h2>
  <h3>Привет, мир!</h3>
  <h4>Привет, мир!</h4>
  <h5>Привет, мир!</h5>
  <h6>Привет, мир!</h6>
  <p>Lorem <span style = "text-decoration: underline;"><b><em>ipsum</b></em></span> dolor sit amet, consectetur adipisicing elit. At, porro.</p>
  <ul>
  <li>one</li>
  <li>two</li>
  <li>thre</li>
</ul>
<ol>
<li>one</li>
  <li>two</li>
  <li>thre</li>
</ol>
 <form action="#">
 <input  type="text" name="text_input" value="" placeholder="введите Ваше имя">
 <input  type="password" name="text_input" value="" placeholder="введите Ваш пароль">
 <input  type="email" value="" placeholder="введите Ваш email">
 <p><textarea cols="55" rows="5" value="" placeholder="Сообщение"></textarea></p>
 <input  type="button" value="Отправить">
 <input  type="button" value="Нажми на меня" onclick="alert('Вы нажали на кнопку')">
 </form>
 <br>
 <form action="">
    <input type="radio" name="1"></input>
    <input type="radio" name="1"></input>
    <input type="radio" name="1"></input>
    <input type="checkbox"></input>
</form>   
  <br>
<table border="2px" >
  <tr>
  <td colspan="2">Привет</td>
<td>Привет</td>
  </tr>
     <tr>
         <td>Текст</td>
         <td>Текст</td>
         <td>Текст</td>
     </tr>
     <tr>
         <td>Текст</td>
         <td>Текст</td>
         <td>Текст</td>
     </tr>
     <tr>
         <td>Текст</td>
         <td>Текст</td>
         <td>Текст</td>
     </tr>
  </table> <br>
  <select name="list1" id="list1" option>
 <option value="1">Выбор 1</option>
 <option value="2">Выбор 2</option>
 <option value="3">Выбор 3</option>
 <option value="4">Выбор 4</option>
 <option value="5">Выбор 5</option>
 </select>
 <br>
  <br>
<img src="https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg" width="350px" alt="">
<br>
<svg width="200" height="200">
  <rect fill="#fc0" width="200" height="200"/>
  <line stroke="black" x1="0" y1="0" x2="200" y2="200"/>
</svg>
  
 
  
`
setupCounter(document.querySelector('#counter'))
