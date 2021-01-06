import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './Jessica.css';
import kasra from './images/kasra.jpg'
import html from './images/html_css.png'
import Ruby from './images/Ruby_certification.png'
import ror from './images/rubyonrails_certification.png'
import * as helper from './style_helpers.js'
import newsweek from './images/newsweek.jpg'
import twitter from './images/twitter_clone.jpg'
import directory from './images/school.jpg'
import scaffold from './images/socialmedia.jpg'
import ceneval from './images/ceneval3.png'
import forecast from './images/Weather.jpg'
import game from './images/game.jpg'
import restaurant from './images/57297.jpg'
import jes from './images/jessica.png'
import './Jessica2.js'
import pdf from './images/JessicaFarias.pdf'
import icon from './images/logo.png'


helper.img("Ruby", Ruby,'');
//helper.img("kasra", kasra,'');
helper.img("htmlcss", html,'');
helper.img("ror", ror,'');
helper.img("newsweek",newsweek);
helper.img("twitter", twitter);
helper.img("directory", directory);
helper.img("scaffold", scaffold);
helper.img("ceneval", ceneval);
helper.img("restaurant",restaurant);
helper.img("forecast",forecast);
helper.img("jess", jes);
helper.img("game",game);

const openInNewTab=(url)=> {
    var win = window.open(url, '_blank');
    win.focus();
}


helper.btn('BtnNewsweek',  ()=>{   
     openInNewTab('https://raw.githack.com/jessicafarias/NewsWeek/version1/index.html'), ''
    }
);

helper.btn('RepoNewsweek',  ()=>{   
    openInNewTab('https://github.com/jessicafarias/NewsWeek'), ''
   }
);

helper.btn('BtnGame',  ()=>{   
    openInNewTab('https://eloquent-volhard-65590d.netlify.app/'), ''
   }
);

helper.btn('RepoGame',  ()=>{   
    openInNewTab('https://github.com/jessicafarias/Game'), ''
   }
);

helper.btn('BtnTalkey',  ()=>{   
    openInNewTab('https://talkhey.herokuapp.com/'), ''});

helper.btn('RepoTalkey',  ()=>{   
    openInNewTab('https://github.com/jessicafarias/social-network'), ''});




helper.btn('BtnSchool',  ()=>{   
    openInNewTab('https://raw.githack.com/jessicafarias/Directory-of-schools/main/html/Options.html'), ''
   }
);

helper.btn('RepoSchool',  ()=>{   
    openInNewTab('https://github.com/jessicafarias/Directory-of-schools'), ''
   }
);

helper.btn('BtnWeather',  ()=>{   
    openInNewTab('https://jessicafarias.github.io/WeatherApp/'), ''
   }
);

helper.btn('RepoWeather',  ()=>{   
    openInNewTab('https://github.com/jessicafarias/WeatherApp'), ''
   }
);

helper.btn('BtnRestaurant',  ()=>{   
    openInNewTab('https://jessicafarias.github.io/RestaurantPage/'), ''
   }
);

helper.btn('RepoRestaurant',  ()=>{   
    openInNewTab('https://github.com/jessicafarias/RestaurantPage'), ''
   }
);

helper.btn('BtnSocial',  ()=>{   
    openInNewTab('https://social-media-jess-ara.herokuapp.com/users/sign_in'), ''
   }
);

helper.btn('RepoSocial',  ()=>{   
    openInNewTab('https://github.com/jessicafarias/ror-social-scaffold'), ''
   }
);

$('head').append("<link rel='shortcut icon' href='"+icon+"'>");



