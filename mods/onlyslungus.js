const nationcount = nations.length

for (const n in nations) {
    delete nations[n]
}

template = {
    key: "SLN",
    name: "Slungus",
    ideology: "bunny",
    attributes: ["noformat"],
    power: 50,
    changeMin: 1,
    changeMax: 10,
    color: ["#ab8f7d", "#ab8f7d", "#ab8f7d"],
    mood: "super bunny"
}

for (let i = 0; i < nationcount; i++) { // yes i know all of the keys will be the same
    // and what will u do
    // fight me
    let key = "SLN" + String(i);
    nations[key] = { ...template };
}

ideologies.bunny = {
    change: 6,
    format: "Bunny republic of COUNTRY",
    max: 5000
}