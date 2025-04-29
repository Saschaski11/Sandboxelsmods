elements.cold_water = {
    color: "#66ccff",
    behavior: behaviors.LIQUID,
    temp: 0,
    category: "w",
    state: "liquid",
    density: 1000,
    tick: function(pixel) {
        pixel.temp = 0;
    }
};

if (!elementCategories.includes("w")) elementCategories.push("w");
