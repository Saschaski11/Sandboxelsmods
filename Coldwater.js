elements.cold_water = {
    color: "#66ccff",
    behavior: behaviors.LIQUID,
    temp: 0,
    category: "liquids",
    state: "liquid",
    density: 1000,
    tick: function(pixel) {
        pixel.temp = 0;
    }
};
