var firebaseConfig = {
  apiKey: "AIzaSyCToyik8gq3vMEkKCQdGJQtzw_-_Roskek",
  authDomain: "randomaps-e23df.firebaseapp.com",
  projectId: "randomaps-e23df",
  storageBucket: "randomaps-e23df.appspot.com",
  messagingSenderId: "249660335211",
  appId: "1:249660335211:web:68adbbdb85ea149ed1bd2e",
  measurementId: "G-CSH4J8ZT2M",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();

var DESTINATIONS = [
  {
    name: "Santiago de Compostela",
    iframe:
      '<iframe title="Mapa de Santiago de Compostela" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46778.3761173597!2d-8.57978906670195!3d42.88026250931573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2efe44e2dd71a7%3A0xe0146888c087e311!2sSantiago%20de%20Compostela%2C%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1602009422782!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Oviedo",
    iframe:
      '<iframe title="Mapa de Oviedo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23202.872128137078!2d-5.866167383661246!3d43.36951671153972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368c9a60ac1c67%3A0x3134440ecc5e6224!2sOviedo%2C%20Asturias!5e0!3m2!1ses!2ses!4v1602009479713!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Santander",
    iframe:
      '<iframe title="Mapa de Santander" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46335.383694334465!2d-3.846156462658437!3d43.46140135676001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4949ae8a6bee71%3A0xd27cdc801682ba96!2sSantander%2C%20Cantabria!5e0!3m2!1ses!2ses!4v1602010192026!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Vitoria-Gasteiz",
    iframe:
      '<iframe title="Mapa de Vitoria-Gasteiz" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46798.2106393501!2d-2.7121775168828273!3d42.854094536348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4fc2377d3d8f5b%3A0x9c6eb78c91ab49c9!2sVitoria-Gasteiz%2C%20%C3%81lava!5e0!3m2!1ses!2ses!4v1602010314554!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Pamplona",
    iframe:
      '<iframe title="Mapa de Pamplona" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46827.20123806353!2d-1.6850410171471686!3d42.81582362586731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd50928ba31965c7%3A0x4e6e903632cb2e90!2sPamplona%2C%20Navarra!5e0!3m2!1ses!2ses!4v1602010343644!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Zaragoza",
    iframe:
      '<iframe title="Mapa de Zaragoza" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47698.956056893134!2d-0.9300003250807932!3d41.65175006895507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914dd5e618e91%3A0x49df13f1158489a8!2sZaragoza!5e0!3m2!1ses!2ses!4v1602010414628!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Barcelona",
    iframe:
      '<iframe title="Mapa de Barcelona" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95777.33906339125!2d2.0787279872462032!3d41.39489759355884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona!5e0!3m2!1ses!2ses!4v1602010432817!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Valladolid",
    iframe:
      '<iframe title="Mapa de Valladolid" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190642.69101009547!2d-4.9488958113077475!3d41.70342473182137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd47728c08c66e93%3A0xb3ff92d41ca26bef!2sValladolid!5e0!3m2!1ses!2ses!4v1602010457874!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Logrono",
    iframe:
      '<iframe title="Mapa de Logrono" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23547.748160744417!2d-2.465872285220979!3d42.46032312832787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5aab4130b390b1%3A0xf98252918a168870!2sLogro%C3%B1o%2C%20La%20Rioja!5e0!3m2!1ses!2ses!4v1602010479644!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Madrid",
    iframe:
      '<iframe title="Mapa de Madrid" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38440867246!2d-3.8196205025441112!3d40.43813108029542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1602010498966!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Merida",
    iframe:
      '<iframe title="Mapa de Merida" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24834.60668108019!2d-6.3611768409963165!3d38.916529433361696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1426907b023fe7%3A0xfe5ac25ac22cadde!2s06800%20M%C3%A9rida%2C%20Badajoz!5e0!3m2!1ses!2ses!4v1602010517842!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Toledo",
    iframe:
      '<iframe title="Mapa de Toledo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98001.02374150553!2d-4.069469853705319!3d39.86232000753502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0bad0bb5fdf1%3A0xc67f5be86a75adfe!2sToledo!5e0!3m2!1ses!2ses!4v1602010537600!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Valencia",
    iframe:
      '<iframe title="Mapa de Valencia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98646.95994973161!2d-0.4315512155625706!3d39.40789688926723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0xb4a351011f7f1d39!2sValencia!5e0!3m2!1ses!2ses!4v1602010555342!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Palma de Mallorca",
    iframe:
      '<iframe title="Mapa de Palma de Mallorca" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98401.32427191034!2d2.635508088944368!3d39.58121768425384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297948706061e07%3A0xe1523779302cd452!2sPalma%20de%20Mallorca%2C%20Islas%20Baleares!5e0!3m2!1ses!2ses!4v1602010577582!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Sevilla",
    iframe:
      '<iframe title="Mapa de Sevilla" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101459.40838729024!2d-6.025098216967931!3d37.37548651798219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1114be6291%3A0x34f018621cfe5648!2sSevilla!5e0!3m2!1ses!2ses!4v1602010596160!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Murcia",
    iframe:
      '<iframe title="Mapa de Murcia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50317.62392972664!2d-1.1621947487164614!3d37.9805948632347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381f8d5928c7f%3A0xd627129b38c4ab9a!2sMurcia!5e0!3m2!1ses!2ses!4v1602010615277!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Las Palmas de Gran Canaria",
    iframe:
      '<iframe title="Mapa de Las Palmas de Gran Canaria" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56303.26421467953!2d-15.47463655116492!3d28.117432004080737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40950e91c097d1%3A0xab36b5ac5338ba65!2sLas%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1602010633322!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    name: "Santa Cruz de Tenerife",
    iframe:
      '<iframe title="Mapa de Santa Cruz de Tenerife" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56123.50111602438!2d-16.321354049635538!3d28.457891377347984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cceccc254171%3A0x43111473d277e52e!2sSanta%20Cruz%20de%20Tenerife!5e0!3m2!1ses!2ses!4v1602010650809!5m2!1ses!2ses" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
];

function pickRandomDestination() {
  return DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
}

function renderRandomDestination(containerId, titleId) {
  var destination = pickRandomDestination();
  var container = document.getElementById(containerId);
  var title = titleId ? document.getElementById(titleId) : null;

  if (!container) {
    return null;
  }

  container.innerHTML = destination.iframe;
  if (title) {
    title.textContent = "Selected destination: " + destination.name;
  }

  return destination;
}

function setMessage(elementId, message, type) {
  var target = document.getElementById(elementId);
  if (!target) {
    return;
  }

  target.className = "app-message " + (type || "info");
  target.textContent = message;
}
