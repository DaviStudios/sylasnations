nations.MS = {
    key: "MS", /*key, make sure its the same as the tag, frances tag is FRA so for managing france u will do nations.FRA , key value has to be the same as the tag */
    name: "The Moss Republic", /*Name of the nation*/
    power: 25, /*Starting power */
    changeMin: 1, /*this is the ideal, higher it is = less power */
    changeMax: 5, /* higher it is = more power, 5 is for examply Germany's */
    mood: "Hungry", /*Set this to anything, it wont matter*/
    color: ["#355E3B", "#114232"]
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
      nations.GER.mood = "pain (france exists)"
    } else if ('GER' in nations && 'POL' in nations) {
      nations.POL.mood = "fear"
    } else if ('RUS' in nations && 'POL' in nations) {
      nations.POL.mood = "fear"
    } else if ('GER' in nations && 'RUS' in nations && 'POL' in nations) {
      nations.POL.mood = "super fear"
    }
  }
}
