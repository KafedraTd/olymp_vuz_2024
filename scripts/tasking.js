
var inputsToFill = 80;

var opi = ['ОПИ1', 'ОПИ2a', 'ОПИ2б', 'ОПИ3a', 'ОПИ3б', 'ОПИ3в', 'ОПИ4', 'ОПИ5a', 'ОПИ5б', 'ОПИ6'];
var greetingName = localStorage.getItem('loginName');
var studEvent = localStorage.getItem('evtstu');
var url = "https://sheetdb.io/api/v1/d74h4a1vd9319";
var form = document.getElementById('tasking');
var mistake = 'rgba(255,43,43,0.5)';
var codeTnved = 0;
var refs={
  "customsList": "https://customs.gov.ru/Structure/perechen--tamozhennyx-organov-v-for",
  "tnvedDoc": "https://www.consultant.ru/cons/cgi/online.cgi?from=455987-81&req=doc&rnd=QUJYw&base=LAW&n=485686#UiFY3TUfmMVcz4KH",
  "explanNotesGn":"https://eec.eaeunion.org/comission/department/catr/psn/?ysclid=lf6e7cij86368579037",
  "explanNotesNt":"https://www.alta.ru/tamdoc/21pr0995/?ysclid=lar36prd1h364617494",
  "classDecisions":"https://eec.eaeunion.org/comission/department/dep_tamoj_zak/klassifikatsiya-tovarov-v-sootvetstvii-s-tn-ved-eaes/resheniya-o-klassifikatsii-tovarov.php?ysclid=lar37qkjcs816823679",
  "descriptDoc":"https://www.consultant.ru/cons/cgi/online.cgi?from=436034-0&req=doc&rnd=QUJYw&base=LAW&n=479836#YW4a3TUgvAg5hbCq",
  "agreementDoc":"https://www.consultant.ru/cons/cgi/online.cgi?from=443776-0&req=doc&rnd=QUJYw&base=LAW&n=476082#4n8Z3TUEpE39k4vB1",
  "incotermsClass":"../pages/classificationOfIncoterms.html",
  "customsDocGn":"https://www.consultant.ru/cons/cgi/online.cgi?req=doc&rnd=fhuoCA&base=LAW&n=380602&cacheid=91EE7F34B05BC0730D198101904AB3CB&mode=rubr#Ra75Q2TaUet7JsxD",
  "customsDocNt":"https://www.consultant.ru/cons/cgi/online.cgi?from=433452-0&req=doc&rnd=QUJYw&base=LAW&n=470738#9cLZ3TUXFMqhaFXM",
  "criminalDoc":"https://www.consultant.ru/cons/cgi/online.cgi?from=444861-0&req=doc&rnd=QUJYw&base=LAW&n=489028#CNRZ3TUefnoLGhXp",
  "penaltyDoc":"https://www.consultant.ru/cons/cgi/online.cgi?from=444863-0&req=doc&rnd=QUJYw&base=LAW&n=489356#pbYZ3TUaZ4kyYN8A",
  "decision107":"https://www.consultant.ru/cons/cgi/online.cgi?from=458591-0&req=doc&rnd=QUJYw&base=LAW&n=485365#8hcZ3TUO98uCoWyj",
  "decision160":"https://www.consultant.ru/cons/cgi/online.cgi?req=doc&base=LAW&n=455021&cacheid=DEFA69944E1E6BF07C8818F3C042DFFE&mode=splus&rnd=4QsTQg#tnolFtTi2MDOHO89",
  "direct152":"http://www.consultant.ru/cons/cgi/online.cgi?req=doc&ts=jjwCdNT4Xf7FcWsv&cacheid=1A6CF5F91AA0E0AF1C2D7B5E789E3315&mode=splus&rnd=7Sd3A&base=LAW&n=113099&dst=1000000001#tXxCdNTi5ijRcWLK",
  "rosselkhoz":"https://fsvps.gov.ru/importexport/",
  "feesDoc":"https://www.consultant.ru/cons/cgi/online.cgi?from=416219-0&req=doc&rnd=MCCUw&base=LAW&n=447294#U0wSlqTQrZs4XDyd2",
  "exdutiesDoc1":"https://www.consultant.ru/cons/cgi/online.cgi?from=457844-0&req=doc&rnd=QUJYw&base=LAW&n=484794#adrZ3TU8F0vPsAHn",
  "exdutiesDoc2":"https://www.consultant.ru/cons/cgi/online.cgi?from=457807-0&req=doc&rnd=QUJYw&base=LAW&n=488870#K7Ra3TU0K28K8HDl",
  "ttrDocNt":"https://www.consultant.ru/cons/cgi/online.cgi?from=453315-0&req=doc&rnd=QUJYw&base=LAW&n=465860#wuKa3TUsCWMU7ImJ",
  "imdutiesDoc": "https://www.consultant.ru/cons/cgi/online.cgi?from=438878-80&req=doc&rnd=MCCUw&base=LAW&n=455987#J4VJlqTkJzOtBmel",
  "taxesDoc":"https://www.consultant.ru/cons/cgi/online.cgi?from=454239-0&req=doc&rnd=QUJYw&base=LAW&n=489355#QMFa3TU6bqahanCG1",
  "trackingDoc":"https://www.consultant.ru/cons/cgi/online.cgi?req=doc&rnd=2tWYzw&base=LAW&n=441402&dst=100009&field=134#34agSYTsarxNNXDC"
}

function href(){
  for (var i of Object.keys(refs)){
    let arg="[data-nm="+i+"]"
    let els=document.querySelectorAll(arg)
    for (el of els){
      el.href=refs[i]
    }
  }
}

href()
const expandableDivs = document.querySelectorAll('.exercise_heads_childs_pic');

document.getElementById('btn').addEventListener('click', () => { submitting() })
// document.getElementById('selectPenalty').addEventListener('change', (e)=>{
//   if (e.target.value!='Ответственности нет'&&e.target.value!='Выберите вариант'){
//     Array.from(document.getElementsByClassName('depending')).forEach(v => v.style.display = 'block');
//   }else{
//     Array.from(document.getElementsByClassName('depending')).forEach(v => v.style.display = 'none');
//   }
// })
// document.getElementById('selectedDocument').addEventListener('change', (e)=>{
//   if (e.target.value=='289-ФЗ'){
//     document.getElementById('ansinp3-2-2').placeholder='Укажите № части';
//     document.getElementById('ansinp3-2-3').placeholder='Укажите № абзаца';
//   }else{
//     document.getElementById('ansinp3-2-2').placeholder='Укажите № пункта';
//     document.getElementById('ansinp3-2-3').placeholder='Укажите № подпункта';
//   }

// })

expandableDivs.forEach(div => {
  div.addEventListener('click', function() {
      this.classList.toggle('expanded');
  });
});

var freeInputNames = ['data[grafa21-2]',
  'data[grafa22-1]', 'data[grafa22-2]', 'data[grafa23]', 'data[grafa24-1]', 'data[grafa24-2]', 'data[grafa25]']

var fieldGrades = [
  // задача 1
  ['data[grafa1_1]', 3], ['data[grafa1_2]', 1], ['data[grafa1_3]', -1], ['data[grafa2-1]', -1], ['data[grafa2-2]', -1],
  ['data[grafa2-3]', -1], ['data[grafa2-4]', -1], ['data[grafa2-5]', -1], ['data[grafa2-6]', -1], ['data[grafa2-7]', -1],
  ['data[grafa2-8]', 1],
  // задача 2
  ['data[grafa2-9]', 1], ['data[grafa2-10]', 1], ['data[grafa2-11]', 1],
  // задача 3
  ['data[grafa2-12]', 1], ['data[grafa20-3]',1], ['data[check2kt]', 3], ['data[grafa3-1]', 1],
  // задача 4
  ['data[grafa20-2]', 0.5], 
  ['data[grafa9-7]', 0.5], ['data[grafa9-8]', 0.5], ['data[grafa9-9]', 0.5], ['data[grafa9-10]', 0.5], ['data[grafa9-11]', 0.5],
  ['data[grafa9-12]', 0.5], ['data[grafa11]', 0.5], ['data[grafa12]', 0.5], ['data[grafa14-1]', 0.5], ['data[grafa14-2]', 0.5], 
  ['data[grafa14-3]', 0.5], ['data[grafa14-4]', 0.5], ['data[grafa14-5]', 0.5], ['data[grafa14-6]', 0.5], ['data[grafa14-7]', 0.5],
  ['data[grafa14-8]', 0.5], ['data[grafa14-9]', 1.0], ['data[grafa14-10]', 0.5], ['data[grafa14-11]', 0.5], ['data[grafa14-12]', 0.5],
  ['data[grafa15-1]', 0], ['data[grafa15-2]', 0], ['data[grafa16]', 0], ['data[grafa17-1]', 0], ['data[grafa17-2]', 0],
  // задача 4 - не используются
  ['data[grafa3-2]', 1], ['data[grafa4]', 1], ['data[grafa5]', 1], ['data[grafa6]', 1], ['data[grafa7]', 1], ['data[grafa8-1]', 1],
  ['data[grafa8-2]', 1], ['data[grafa8-3]', 1], ['data[grafa8-4]', 1], ['data[grafa8-5]', 1], ['data[grafa8-6]', 1],
  ['data[grafa8-7]', 1], ['data[grafa8-8]', 1], ['data[grafa8-9]', 1], ['data[grafa8-10]', 1], ['data[grafa8-11]', 1], ['data[grafa8-12]', 1],
  ['data[check8kt]', 1], ['data[grafa9-1]', 1], ['data[grafa9-2]', 1],
  // задача 5
  ['data[grafa9-3]', 1], ['data[grafa9-4]', 2], ['data[grafa9-5]', 1], ['data[grafa9-6]', 1]
]


function getTransfering() {
  document.getElementsByName('data[usrName]')[0].value = greetingName;
  document.getElementsByName('data[studEvent]')[0].value = studEvent;
  formatDate();
  for (i in fieldGrades) {
    try {
      document.getElementsByName(fieldGrades[i][0])[0].setAttribute('data-cost', fieldGrades[i][1]);
    } catch { }

    //document.getElementsByName(fieldGrades[i][0])[0].parentElement.setAttribute('data-tooltip',fieldGrades[i][1]);
  }
  if (((greetingName == 'АДМИН') || (localStorage.getItem('checked') == 1)) &&
    (localStorage.getItem('blanc') != 1)) {
    let scorePanel = document.createElement('div');
    let scorePanel_0 = document.createElement('div');
    scorePanel.id = 'scorePanel';
    scorePanel_0.id = 'scorePanel_0';
    let fillPanel = document.createElement('div');
    fillPanel.id = 'fillPanel';
    document.body.appendChild(scorePanel);
    document.body.appendChild(scorePanel_0);
    document.body.appendChild(fillPanel);
    checkingTasking();
    document.getElementById('btn').style.display = 'none';
  }
}

document.querySelectorAll('.tnved_mask').forEach((input) => {
  // Attach an input event listener to each element
  input.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric chars
    let formattedValue = '';

    // Apply the mask pattern "xxxx xx xxx x"
    if (value.length > 0) formattedValue += value.substring(0, 4);
    if (value.length >= 5) formattedValue += ' ' + value.substring(4, 6);
    if (value.length >= 7) formattedValue += ' ' + value.substring(6, 9);
    if (value.length >= 10) formattedValue += ' ' + value.substring(9, 10);

    e.target.value = formattedValue;
  });
});
document.querySelectorAll('.date_mask').forEach((input) => {
  input.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric chars
      let formattedValue = '';

      // Apply the mask pattern "xx.xx.xxxx"
      if (value.length > 0) formattedValue += value.substring(0, 2);
      if (value.length >= 3) formattedValue += '.' + value.substring(2, 4);
      if (value.length >= 5) formattedValue += '.' + value.substring(4, 8);

      e.target.value = formattedValue;
  });
});
function checkingTasking() {
  document.getElementsByName('data[usrName]')[0].value = localStorage.getItem('student')
  document.getElementsByName('data[studEvent]')[0].value = localStorage.getItem('evtstu');
  document.getElementsByName('data[date]')[0].value = localStorage.getItem('dtfill')

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    let dataArray = Array.from(data);
    var dataArrayUsr, dataArrayAdm;

    for (i = 0; i < dataArray.length; i++) {

      if (dataArray[i].usrName == localStorage.getItem('student') &&
        dataArray[i].date == localStorage.getItem('dtfill') &&
        dataArray[i].studEvent == localStorage.getItem('evtstu')) {
        dataArrayUsr = Object.entries(dataArray[i]);
      };
      if (dataArray[i].usrName == 'АДМИН' &&
        dataArray[i].studEvent == localStorage.getItem('evtstu')) {
        dataArrayAdm = Object.entries(dataArray[i]);
      };
    };
    var score = 0;
    var cost = 0;
    var filled = 0;
    var fields = 0;
    var OPIY=0;
    var OPIN=0;

    for (y = 5; y < inputsToFill; y++) {
      inputName = 'data[' + dataArrayAdm[y][0] + ']';
      element = document.getElementsByName(inputName)[0];
      try {
        addingCost = Number(document.getElementsByName(inputName)[0].getAttribute('data-cost'));
      } catch {
        addingCost = 0;
      }
      column = dataArrayAdm[y][0];
      admData = dataArrayAdm[y][1];
      usrData = dataArrayUsr[y][1];
      //Проставление всех ответов, сделанных пользователем
      try {
        if (element.type == 'checkbox') {
          if (admData != '' && usrData != '') { //если должен быть ответ и он дан
            element.checked = true;
            fields++;
            filled++;
          } else if (admData != '' && usrData == '') { //если должен быть ответ и он не дан
            fields++;
            element.parentElement.style.backgroundColor = mistake;
          } else if (admData == '' && usrData != '') { //если не должен быть ответ и он дан
            element.checked = true;
            filled++;
            element.parentElement.style.backgroundColor = mistake;
          }
        } else {
          if (admData != '' || usrData != '') { // если не checkbox
            element.value = usrData;
            if (admData != '') { fields++; }
            if (usrData != '') { filled++; }
          }
        }
      } catch { }

      // Начисление баллов и выделение цветом за ответы
      if ((admData == usrData) && (admData != '')) {
        if (element.type != 'checkbox') {
          score += addingCost;
          if (element.id == 'ansinp1-1') {
            codeTnved = 1;
          }
        } else {
          if (codeTnved == 1) {
            //score += addingCost;
            OPIY += addingCost;
          }
          if(admData=='ОПИ6'){
            if(OPIY>=Math.abs(OPIN)&&OPIY!=0){
              score=score+OPIY+OPIN
            }
          }
        }
        cost += addingCost;
        element.parentElement.setAttribute('data-tooltip', `+${addingCost}`);
      } else if (admData != usrData) {
        if (admData != '') {
          cost += addingCost;
          element.parentElement.setAttribute('data-tooltip', `${admData} [${addingCost}]`);

        } else {
          if (element.type == 'checkbox') { //если ОПИ стоимостью -1
            OPIN += addingCost;
          }
          if(admData=='ОПИ6'){
            if(OPIY>=Math.abs(OPIN)&&OPIY!=0){
              score=score+OPIY+OPIN
            }
          }
          element.parentElement.setAttribute('data-tooltip', `[${addingCost}]`);/* должно быть пусто */
        }
        //window.getComputedStyle(document.querySelector('#ansinp1-1'), ':before').getPropertyValue('content')
        let tooltipWidth = window.getComputedStyle(element.parentElement, 'after').width;
        tooltipWidth = tooltipWidth.substring(0, tooltipWidth.length - 2) / 2;
        element.parentElement.style.setProperty('--tooltipWidth', tooltipWidth + 'px');
        element.style.backgroundColor = mistake;
      }
    };
    console.log(document.getElementById('usrName').value)
    document.getElementById('scorePanel_0').textContent =`${document.getElementById('usrName').value}`
    document.getElementById('scorePanel').textContent = `Баллы: ${Math.round(score * 10) / 10}/${Math.round(cost * 10) / 10} = ${roundingSecond(score / cost, 2)}%`;
    document.getElementById('fillPanel').textContent = `Поля: ${filled}/${fields} = ${roundingSecond(filled / fields, 2) }%`;
  };
  getData();

};

function rounding(numberObject, digit) {
  var numX = numberObject.value;
  if (numX != "") {
    var numY = ((numX * 100) / 100).toFixed(digit);
    numberObject.value = numY;
  }
};

function roundingSecond(numX, digit) {
  if (numX != "") {
    var numY = ((numX * 100)).toFixed(digit);
    return numY;
  };
};


function removeSpaces(textObject) {
  let x = textObject.value.replace(/\s/g, '');
  if (x.slice(-1)==','){x=x.slice(0, -1)}
  if (x.slice(-1)=='.'){x=x.slice(0, -1)}
  textObject.value = x
  if (textObject.id == 'ansinp1-1') {
    if (textObject.value.length != 10) {
      textObject.classList.add('incorrect');
    } else {
      textObject.classList.remove('incorrect');
    }
  }
};

function removeText(textObject) {
  let x = textObject.value.replace(/,/g, '.');
  x = x.replace(/\//g, '.');
  if (x.substr(x.length - 1) == '.') {
    x = x.slice(0, -1);
  }
  if (x.split('.').length == 3) {
    ar = x.split('.');
    x = ar[0] + ar[1] + '.' + ar[2];

  } else if (x.split('.').length > 3) {
    textObject.classList.add('incorrect');
  } else {
    try {
      textObject.classList.remove('incorrect');
    } catch { }
  }
  let y = x.replace(/[^.\d]/g, '').replace(/^(\d*\.?)|(\d*)\.?/g, "$1$2");
  if (y.charAt(0) == '.') {
    y = y.split('.')[1];
  }

  textObject.value = y;
  if (y.length > 5) {
    textObject.classList.add('incorrect');
  } else {
    try {
      textObject.classList.remove('incorrect');
    } catch { }
  }
}

function submitting() {
  document.querySelector('.loader').classList.remove('loader--hidden');
  formatDate();
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  }).then(
    response => response.json()
  ).then((html) => {
    document.querySelector('.loader').classList.add('loader--hidden');
    document.body.removeChild(document.querySelector('.loader'));
    setTimeout(() => {
      alert('Ответы отправлены. Можно закрывать страницу.')
    }, 900);
  });
  document.getElementById('btn').style.setProperty('display', 'none');
}



function formatDate() {
  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  document.getElementsByName('data[date]')[0].value = day + "/" + month + "/" + year + ' ' + hour + ':' + minute + ':' + second;
};