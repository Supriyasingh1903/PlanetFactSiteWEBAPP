const planetsData = {
    mercury: {
        name: "MERCURY",
        description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        rotationTime: "58.6 DAYS",
        revolutionTime: "87.97 DAYS",
        radius: "2,439.7 KM",
        temperature: "167°C",
        sections: {
            overview: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.",
            structure: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core.",
            geology: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years."
        }
    },
    venus: {
        name: "VENUS",
        description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        rotationTime: "243 DAYS",
        revolutionTime: "224.7 DAYS",
        radius: "6,051.8 KM",
        temperature: "464°C",
        sections: {
            overview: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon.",
            structure: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid.",
            geology: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km across."
        }
    },
    earth: {
        name: "EARTH",
        description: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        rotationTime: "0.99 DAYS",
        revolutionTime: "365.26 DAYS",
        radius: "6,371 KM",
        temperature: "16°C",
        sections: {
            overview: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water.",
            structure: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust.",
            geology: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite."
        }
    },
    mars: {
        name: "MARS",
        description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
        rotationTime: "1.03 DAYS",
        revolutionTime: "1.88 YEARS",
        radius: "3,389.5 KM",
        temperature: "-28°C",
        sections: {
            overview: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war.",
            structure: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid.",
            geology: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt."
        }
    },
    jupiter: {
        name: "JUPITER",
        description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        rotationTime: "9.93 HOURS",
        revolutionTime: "11.86 YEARS",
        radius: "69,911 KM",
        temperature: "-108°C",
        sections: {
            overview: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets combined.",
            structure: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact with a planet of about ten Earth masses a few million years after Jupiter's formation.",
            geology: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
        }
    },
    saturn: {
        name: "SATURN",
        description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        rotationTime: "10.8 HOURS",
        revolutionTime: "29.46 YEARS",
        radius: "58,232 KM",
        temperature: "-138°C",
        sections: {
            overview: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.",
            structure: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm³.",
            geology: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles."
        }
    },
    uranus: {
        name: "URANUS",
        description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        rotationTime: "17.2 HOURS",
        revolutionTime: "84 YEARS",
        radius: "25,362 KM",
        temperature: "-195°C",
        sections: {
            overview: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares.",
            structure: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope.",
            geology: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03."
        }
    },
    neptune: {
        name: "NEPTUNE",
        description: "Neptune is the eighth and outermost-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.",
        rotationTime: "16.07 HOURS",
        revolutionTime: "164.79 YEARS",
        radius: "24,622 KM",
        temperature: "-201°C",
        sections: {
            overview: "Neptune is the eighth and outermost-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet.",
            structure: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core.",
            geology: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm."
        }
    }
};

let currentPlanet = 'earth';
let currentSection = 'overview';

// DOM elements
const planetName = document.getElementById('planet-name');
const planetDescription = document.getElementById('planet-description');
const planetVisual = document.getElementById('planet-visual');
const rotationTime = document.getElementById('rotation-time');
const revolutionTime = document.getElementById('revolution-time');
const radius = document.getElementById('radius');
const temperature = document.getElementById('temperature');

// Navigation
const navLinks = document.querySelectorAll('.nav-menu a');
const sectionBtns = document.querySelectorAll('.section-btn');

// Initialize
function init() {
    updatePlanetDisplay();
    setupEventListeners();
}

function setupEventListeners() {
    // Planet navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const planet = e.target.dataset.planet;
            if (planet) {
                switchPlanet(planet);
            }
        });
    });

    // Section navigation
    sectionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.closest('.section-btn').dataset.section;
            if (section) {
                switchSection(section);
            }
        });
    });
}

function switchPlanet(planet) {
    currentPlanet = planet;
    currentSection = 'overview';
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.planet === planet) {
            link.classList.add('active');
        }
    });

    // Reset section buttons
    sectionBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === 'overview') {
            btn.classList.add('active');
        }
    });

    updatePlanetDisplay();
}

function switchSection(section) {
    currentSection = section;
    
    // Update active section button
    sectionBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === section) {
            btn.classList.add('active');
        }
    });

    updatePlanetContent();
}

function updatePlanetDisplay() {
    const planet = planetsData[currentPlanet];
    
    // Update planet visual
    planetVisual.className = `planet ${currentPlanet}-planet`;
    
    // Update content
    updatePlanetContent();
    
    // Update stats
    rotationTime.textContent = planet.rotationTime;
    revolutionTime.textContent = planet.revolutionTime;
    radius.textContent = planet.radius;
    temperature.textContent = planet.temperature;
}

function updatePlanetContent() {
    const planet = planetsData[currentPlanet];
    
    planetName.textContent = planet.name;
    
    // Update description based on current section
    if (currentSection === 'overview') {
        planetDescription.textContent = planet.description;
    } else {
        planetDescription.textContent = planet.sections[currentSection];
    }
}

// Initialize the app
init();