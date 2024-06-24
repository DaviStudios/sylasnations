const ideologies = {
  democratic: {
    format: 'Republic of COUNTRY',
    change: 5,
    max: 4500,
    leader: 'President LEADER'
  },
  communist: {
    format: 'Socialist Republic of COUNTRY',
    change: 3,
    max: 4500,
    leader: 'President LEADER'
  },
  fascist: {
    format: 'Empire of COUNTRY',
    change: 4,
    max: 4500,
    leader: 'Emperor LEADER'
  },
  monarchist: {
    format: 'Kingdom of COUNTRY',
    change: 6,
    max: 5000,
    leader: 'King LEADER'
  },
  theocratic: {
    format: 'COUNTRY',
    change: 8,
    max: 650,
    leader: 'Father LEADER'
  }
}

const alliances = {
  Alpha: [],
  Beta: [],
  Gamma: []
}

const leaders = {
  ENG: ['David', 'Lucas', 'Edward', 'Charles'],
  RUS: ['Ivan', 'Andrei', 'Maxim', 'Aleksandr'],
  CZK: ['David', 'Lukáš', 'Matěj', 'Karel'],
  FRA: ['Gabriel', 'Raphaël', 'Louise', 'Léo'],
  GER: ['Carl', 'Leopol', 'Louis', 'Frederick'],
}

let nations = {
  "GER": {
    key: "GER",
    name: "Germany",
    ideology: "democratic",
    power: 17,
    changeMin: 1,
    changeMax: 5,
    color: ["#4a4949", "#4a4949", "#e82727", "#e82727", "#edc124", "#edc124"],
    mood: "bread",
    elections: 4,
    leaders: leaders.GER
  },
  "POL": {
    key: "POL",
    name: "Poland",
    ideology: "democratic",
    power: 13,
    changeMin: 1,
    changeMax: 4,
    color: ["#ff0000", "#ff0000", "#dedede", "#dedede"],
    mood: "sad",
    elections: 4,
    leaders: leaders.CZK
  },
  "CZE": {
    key: "CZE",
    name: "Czech Republic",
    ideology: "democratic",
    power: 14,
    changeMin: 1,
    changeMax: 4,
    attributes: ["noformat"],
    format: 'COUNTRY republic',
    color: ["#ff0000", "#2471ed", "#dedede"],
    mood: "beer",
    elections: 4,
    leaders: leaders.CZK
  },
  "SKO": {
    key: "SKO",
    name: "Slovakia",
    ideology: "democratic",
    power: 8,
    changeMin: 1,
    changeMax: 3,
    color: ["#ff0000", "#2471ed", "#dedede"],
    mood: "smol",
    elections: 4,
    leaders: leaders.CZK
  },
  "RUS": {
    key: "RUS",
    name: "Russia",
    ideology: "democratic",
    power: 24,
    changeMin: 1,
    changeMax: 7,
    color: ["#ff0000", "#2471ed", "#dedede"],
    mood: "vodka",
    elections: 4,
    leaders: leaders.RUS
  },
  "USA": {
    key: "USA",
    name: "United States",
    ideology: "democratic",
    attributes: [
      "noformat"
    ],
    power: 24,
    changeMin: 1,
    changeMax: 7,
    color: ["#2471ed", "#dedede", "#ff0000"],
    mood: "free",
    elections: 4,
    leaders: leaders.ENG
  },
  "HUN": {
    key: "HUN",
    name: "Hungary",
    ideology: "democratic",
    power: 12,
    changeMin: 1,
    changeMax: 3,
    color: ["#ed3c2f", "#e0e0e0", "#35b83c"],
    mood: "ew",
    elections: 4,
    leaders: leaders.FRA
  },
  "FRA": {
    key: "FRA",
    name: "France",
    ideology: "democratic",
    power: 15,
    changeMin: 1,
    changeMax: 5,
    color: ["#041185", "#f2f2f2", "#f53333"],
    mood: "quassont",
    elections: 4,
    leaders: leaders.FRA
  },
  "SCT": {
    key: "SCT",
    name: "Scotland",
    ideology: "monarchist",
    power: 5,
    changeMin: 1,
    changeMax: 2,
    color: ["#33e1f5", "#f2f2f2", "#33e1f5"],
    mood: "nub",
    elections: 40,
    leaders: leaders.ENG
  },
  "PAP": {
    key: "PAP",
    name: "Vatican City",
    ideology: "monarchist",
    power: 1,
    changeMin: 1,
    changeMax: 1,
    color: ["#ffde00", "#ffffff"],
    mood: "nub",
    elections: 40,
    leaders: [...leaders.GER, ...leaders.FRA]
  },
}

let backMap = {}

let one = null
let year = 0
let ycounter = 0
let two = null
let canTick = true
let used = false
let mods = []
let menuMods = false
let bType = 3
let ny = 10.0

function c() {
  const entries = Object.entries(nations);

  const index1 = Math.floor(Math.random() * entries.length);
  const [key1, value1] = entries[index1];
  one = { key: key1, ...value1 };

  let index2;
  do {
    index2 = Math.floor(Math.random() * entries.length);
  } while (index2 === index1);

  const [key2, value2] = entries[index2];
  two = { key: key2, ...value2 };

  if (alliances.Alpha.includes(one.key) && alliances.Alpha.includes(two.key)) {
    c()
  } else {
    if (one.attributes && one.attributes.includes("noformat")) {
      document.getElementById('1').textContent = one.name;
    } else {
      document.getElementById('1').textContent = ideologies[one.ideology].format.replace('COUNTRY', one.name);
    }

    if (two.attributes && two.attributes.includes("noformat")) {
      document.getElementById('2').textContent = two.name;
    } else {
      document.getElementById('2').textContent = ideologies[two.ideology].format.replace('COUNTRY', two.name);
    }
  }
  if (alliances.Beta.includes(one.key) && alliances.Beta.includes(two.key)) {
    c()
  } else {
    if (one.attributes && one.attributes.includes("noformat")) {
      document.getElementById('1').textContent = one.name;
    } else {
      document.getElementById('1').textContent = ideologies[one.ideology].format.replace('COUNTRY', one.name);
    }

    if (two.attributes && two.attributes.includes("noformat")) {
      document.getElementById('2').textContent = two.name;
    } else {
      document.getElementById('2').textContent = ideologies[two.ideology].format.replace('COUNTRY', two.name);
    }
  }
  if (alliances.Gamma.includes(one.key) && alliances.Gamma.includes(two.key)) {
    c()
  } else {
    if (one.attributes && one.attributes.includes("noformat")) {
      document.getElementById('1').textContent = one.name;
    } else {
      document.getElementById('1').textContent = ideologies[one.ideology].format.replace('COUNTRY', one.name);
    }

    if (two.attributes && two.attributes.includes("noformat")) {
      document.getElementById('2').textContent = two.name;
    } else {
      document.getElementById('2').textContent = ideologies[two.ideology].format.replace('COUNTRY', two.name);
    }
  }
}

function choiceRD(dict) {
  const k = Object.keys(dict);
  const rk = k[Math.floor(Math.random() * k.length)];
  return rk;
}
function choiceRA(array) {
  const rk = Math.floor(Math.random() * array.length)
  return array[rk];
}

function isd(n, n2) {
  return n % n2 === 0;
}

function tick() {
  if (canTick == true) {
    ycounter += 0.5
    if (ycounter == ny) {
      year += 1
      ycounter = 0
      document.getElementById('year').textContent = 'YEAR: ' + year
    }
    backMap = {}
    for (const k in nations) {
      if (nations[k].hasOwnProperty('leaders')) {
        if (!nations[k].hasOwnProperty('leader')) {
          nations[k]['leader'] = choiceRA(nations[k].leaders)
        }
      } else {
        nations[k]['leaders'] = leaders.ENG
        nations[k]['leader'] = choiceRA(nations[k].leaders)
      }
      if (nations[k].hasOwnProperty('elections')) {
        if (nations[k].hasOwnProperty('nextElection')) {
          if (nations[k].nextElection == year) {
            const c = Math.random()
            if (c <= 0.35) {
              nations[k].ideology = choiceRD(ideologies)
              nations[k]['leader'] = choiceRA(nations[k].leaders)
            }
            nations[k].nextElection += nations[k].elections
          }
        } else {
          nations[k]['nextElection'] = nations[k].elections
        }
      }
      const idea = nations[k].ideology
      if (idea in ideologies) {
        if (nations[k].power < ideologies[idea].max) {
          nations[k].power += (Math.floor(Math.random() * (nations[k].changeMax - nations[k].changeMin + 1) - nations[k].changeMin)) + (Math.floor(Math.random() * (ideologies[idea].change - (ideologies[idea].change - 3) + 1)))
        }
      }
    }
    const natsList = document.getElementById('nats');
    while (natsList.firstChild) {
      natsList.removeChild(natsList.firstChild);
    }
    for (const k in nations) {
      const nl = document.createElement('li');
      nl.onclick = function () {
        bonus(bType, nations[k].key)
      }
      if (nations[k].attributes && nations[k].attributes.includes("noformat")) {
        nl.textContent = k + ": " + nations[k].name + ", POWER: " + nations[k].power + ", MOOD: " + nations[k].mood + ", IDEOLOGY: " + nations[k].ideology + ', LEADER: ' + ideologies[nations[k].ideology].leader.replace('LEADER', nations[k].leader);
      } else {
        nl.textContent = k + ": " + ideologies[nations[k].ideology].format.replace('COUNTRY', nations[k].name) + ", POWER: " + nations[k].power + ", MOOD: " + nations[k].mood + ", IDEOLOGY: " + nations[k].ideology + ', LEADER: ' + ideologies[nations[k].ideology].leader.replace('LEADER', nations[k].leader);
      }
      nl.style = "background-image: linear-gradient(to right, " + nations[k].color + ");" + " background-repeat: no-repeat; cursor: pointer; padding-top: 7px; padding-bottom: 7px; border: 1px solid white;"
      natsList.appendChild(nl);
    }
  }
  mood()
}

function mood() {
  for (const k in nations) {
    if (nations[k].power < 0 && nations[k].power > -50) {
      nations[k].mood = "sad";
    } else if (nations[k].power < -49) {
      nations[k].mood = "pain";
    } else if (nations[k].power > 0 && nations[k].power <= 50) {
      nations[k].mood = "normal";
    } else if (nations[k].power > 50 && nations[k].power <= 135) {
      nations[k].mood = "stronk";
    } else if (nations[k].power > 135) {
      nations[k].mood = "super stronk";
    }

    if ("FRA" in nations && "GER" in nations) {
      nations.GER.mood = "pain (france exists) "
    }
  }
}

function show() {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  document.getElementById('selected').textContent = backMap[x]
}

function bonus(bt, t) {
  if (t in nations) {
    if (bt == 1) {
      nations[t].power = nations[t].power + 5
    } else if (bt == 2) {
      nations[t].changeMin = nations[t].changeMin + 1
    } else if (bt == 3) {
      nations[t].changeMax = nations[t].changeMax + 1
    } else if (bt == 4) {
      one = nations[t]
      document.getElementById('1').textContent = one.name;
    } else if (bt == 5) {
      two = nations[t]
      document.getElementById('2').textContent = two.name;
    } else if (bt == 6) {
      alliances.Alpha.push(nations[t].key)
    } else if (bt == 7) {
      alliances.Beta.push(nations[t].key)
    } else if (bt == 8) {
      alliances.Gamma.push(nations[t].key)
    } else if (bt == 9) {
      if (alliances.Alpha.includes(nations[t].key)) {
        alliances.Alpha.indexOf(nations[t].key) > -1 && alliances.Alpha.splice(alliances.Alpha.indexOf(nations[t].key), 1);
      } else if (alliances.Beta.includes(nations[t].key)) {
        alliances.Beta.indexOf(nations[t].key) > -1 && alliances.Beta.splice(alliances.Beta.indexOf(nations[t].key), 1);
      } else if (alliances.Gamma.includes(nations[t].key)) {
        alliances.Gamma.indexOf(nations[t].key) > -1 && alliances.Gamma.splice(alliances.Gamma.indexOf(nations[t].key), 1);
      }
    }
  }
}


function a() {
  if (alliances.Alpha.includes(one.key) && alliances.Alpha.includes(two.key)) {
    document.getElementById('result').textContent = 'NONE: Allies!'
  } else if (alliances.Beta.includes(one.key) && alliances.Beta.includes(two.key)) {
    document.getElementById('result').textContent = 'NONE: Allies!'
  } else if (alliances.Gamma.includes(one.key) && alliances.Gamma.includes(two.key)) {
    document.getElementById('result').textContent = 'NONE: Allies!'
  } else {
    let twon = ''
    let onen = ''
    if (two.attributes && two.attributes.includes('noformat')) {
      twon = two.name
    } else {
      twon = ideologies[two.ideology].format.replace('COUNTRY', two.name)
    }
    if (one.attributes && one.attributes.includes('noformat')) {
      onen = one.name
    } else {
      onen = ideologies[one.ideology].format.replace('COUNTRY', one.name)
    }
    if (one.power > two.power) {
      nations[two.key].power -= two.changeMin + 5
      nations[two.key].mood = "sad"
      nations[one.key].power += two.changeMin + 5
      document.getElementById('result').innerHTML = "WON: " + "<a class='txtn2'>" + onen + '</a>'
      document.getElementById('result').className = 'txtn'
    } else if (one.power === two.power) {
      document.getElementById('result').innerHTML = "TIE: " + "<a class='txtn2'>" + onen + '-' + twon + "</a>"
      document.getElementById('result').className = 'txtn'
      nations[two.key].power -= two.changeMax - 3
      nations[one.key].power -= one.changeMax - 3
    } else {
      nations[two.key].power += one.changeMin + 5
      nations[one.key].power -= one.changeMin + 5
      nations[one.key].mood = "sad"
      document.getElementById('result').innerHTML = "WON: " + "<a class='txtn2'>" + twon + '</a>'
      document.getElementById('result').className = 'txtn'
    }
  }
}

function loadMod(mod) {
  try {
    const scr = document.createElement('script');
    scr.src = "mods/" + mod
    document.head.appendChild(scr);
  } catch (err) {
    console.log(err)
  }
}

function saveMod(mod) {
  try {
    if (!mods.includes(mod)) {
      mods.push(mod);
      localStorage.setItem('mods', JSON.stringify(mods));
      alert('Reload page to see changes');
    } else {
      alert('Mod already saved!');
    }
  } catch (err) {
    console.error(err);
  }
}

function removeMod(mod) {
  try {
    if (mods.includes(mod)) {
      mods.indexOf(mod) > -1 && mods.splice(mods.indexOf(mod), 1);
      localStorage.setItem('mods', JSON.stringify(mods))
      alert('Reload page to see changes')
    } else {
      alert('Mod isnt saved!')
    }
  } catch (err) {
    console.error(err)
  }
}

function modMenu() {
  if (menuMods == false) {
    document.getElementById('m').style.display = "block"
    document.getElementById('m2').style.display = "block"
    document.getElementById('m3').style.display = "block"
    document.getElementById('mList').style.display = "block"
    document.getElementById('mList2').style.display = "block"
    menuMods = true
  } else {
    document.getElementById('m').style.display = "none"
    document.getElementById('m2').style.display = "none"
    document.getElementById('m3').style.display = "none"
    document.getElementById('mList').style.display = "none"
    document.getElementById('mList2').style.display = "none"
    menuMods = false
  }
}

function createButton(class_, textContent, function_) {
  const classes = ['red', 'blue', 'green']
  if (classes.includes(class_)) {
    let button = document.createElement('button')
    button.className = class_
    button.textContent = textContent
    button.onclick = function_
    document.getElementById('cbutton').appendChild(button)
  }
}

window.onload = function () {
  for (const i in ideologies) {
    if (!ideologies[i].hasOwnProperty('leader')) {
      ideologies[i]['leader'] = 'LEADER'
    }
  }
  console.log('hi')
  for (const c of document.getElementById('nats').children) {
    document.getElementById('nats').removeChild(c)
  }
  for (const k in nations) {
    const nl = document.createElement('li')
    nl.textContent = k + ": " + nations[k].name + ", POWER: " + nations[k].power
    document.getElementById('nats').appendChild(nl)
  }
  try {
    mods = JSON.parse(localStorage.mods)
    for (const m of mods) {
      loadMod(m)
      let nl = document.createElement('li')
      nl.textContent = m
      document.getElementById('mList').appendChild(nl)
    }
  } catch (err) {
    console.log('no mods/invalid mod')
  }
}

setInterval(tick, 500)
