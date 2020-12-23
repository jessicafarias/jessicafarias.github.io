import './reset.css';
import './styles.css';
import './Jessica.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import kasra from './images/kasra.jpg'
import Ruby from './images/Ruby_certification.png'


const img = (imgId, src, ...styles) => {
  const imagen = document.getElementById(imgId);
  imagen.src = src;
  imagen.classList.add(...styles);
};

img("Ruby", Ruby,'');



