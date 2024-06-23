const color = [...nations.CZE.color]
delete nations.CZE
delete nations.SKO

alliances['CSET'] = ['CZE', 'GER', 'POL']

nations.CZE = {
    key: "CZE",
    name: "Czechoslovak Republic",
    ideology: "democratic",
    attributes: ["noformat"],
    power: nations.USA.power,
    changeMin: 1,
    changeMax: 6,
    color: color,
    mood: "super beer",
    elections: 4
}