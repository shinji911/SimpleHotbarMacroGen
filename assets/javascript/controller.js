//ready js
$(function () {
    let currentBtn = 0;
    let currentHotbar = 0;
    let curBtnMsg = $("#curBtnMsg");
    let spellsPool = $("#spellsPool");
    let hotbarMenu = $("#hotbarMenu");
    let macroResult = $("#macroResult");

    $(".contRow").hide();

    function renderBar() {
        for (var i = 0; i < 16; i++) {
            hotbarState[i].barPos.prop("src", hotbarState[i].spell.imgUrl);
            hotbarState[i].barPos.prop("alt", hotbarState[i].spell.name);
        };
    };

    function renderSpells() {
        spellsData.forEach(spell => {
            let spellImg = $(`<img data-toggle="tooltip" data-placement="bottom">`).prop("src", spell.imgUrl);
            spellImg.prop("width", "40").prop("height", "40").prop("title", spell.name);
            let spellBtn = $(`<button type="button">`).addClass("btn btn-dark p-0 m-1").val(spell.number);
            spellBtn.append(spellImg);
            spellsPool.append(spellBtn);
        });
    };

    function resetHotbar() {
        hotbarState.forEach(bar => {
            bar.spell = spellsData[0];            
        });
    };

    $(".btn-primary").click(function() {
        if (currentBtn == 0) {
            currentBtn = $(this).val();
            curBtnMsg.text("Choose a spell for " + $(this).text());
            renderSpells();
        };
    });

    $(".dropdown-item").click(function() {
        if(currentHotbar == 0) {
            $(".contRow").show();
            curBtnMsg.text("Pick a button to choose a spell");
        }
        macroResult.empty();
        currentHotbar = $(this).text();
        hotbarMenu.text(currentHotbar);
        resetHotbar();
        renderBar();
    });

    $("#genMacro").click(function() {
        macroResult.empty();
        if (currentHotbar != 0) {
            hotbarState.forEach(bar => {
                if (bar.spell.number != 0) {
                    let line = $("<p>").text(`/chotbar blueAction "` + bar.spell.name + `" ` + currentHotbar + ` ` + bar.posName);
                    macroResult.append(line);
                };
            });
        } else {
            macroResult.append("<p>Please select hotbar number</p>");
        };        
    });

    spellsPool.on("click", ".btn-dark", function () {
        let spellNum = $(this).val();
        hotbarState[currentBtn].spell = spellsData[spellNum];
        renderBar();
        spellsPool.empty();
        curBtnMsg.text("Pick a button to choose a spell");
        currentBtn = 0;
    })

});

// data zone
const spellsData = [
    {
        number: 0,
        name: "Choose A Spell",
        imgUrl: "./assets/images/00.png"
    },
    {
        number: 1,
        name: "Water Cannon",
        imgUrl: "./assets/images/01.png"
    },
    {
        number: 2,
        name: "Flame Thrower",
        imgUrl: "./assets/images/02.png"
    },
    {
        number: 3,
        name: "Aqua Breath",
        imgUrl: "./assets/images/03.png"
    },
    {
        number: 4,
        name: "Flying Frenzy",
        imgUrl: "./assets/images/04.png"
    },
    {
        number: 5,
        name: "Drill Cannons",
        imgUrl: "./assets/images/05.png"
    },
    {
        number: 6,
        name: "High Voltage",
        imgUrl: "./assets/images/06.png"
    },
    {
        number: 7,
        name: "Loom",
        imgUrl: "./assets/images/07.png"
    },
    {
        number: 8,
        name: "Final Sting",
        imgUrl: "./assets/images/08.png"
    },
    {
        number: 9,
        name: "Song of Torment",
        imgUrl: "./assets/images/09.png"
    },
    {
        number: 10,
        name: "Glower",
        imgUrl: "./assets/images/10.png"
    },
    {
        number: 11,
        name: "Plaincracker",
        imgUrl: "./assets/images/11.png"
    },
    {
        number: 12,
        name: "Bristle",
        imgUrl: "./assets/images/12.png"
    },
    {
        number: 13,
        name: "White Wind",
        imgUrl: "./assets/images/13.png"
    },
    {
        number: 14,
        name: "Level 5 Petrify",
        imgUrl: "./assets/images/14.png"
    },
    {
        number: 15,
        name: "Sharpened Knife",
        imgUrl: "./assets/images/15.png"
    },
    {
        number: 16,
        name: "Ice Spikes",
        imgUrl: "./assets/images/16.png"
    },
    {
        number: 17,
        name: "Blood Drain",
        imgUrl: "./assets/images/17.png"
    },
    {
        number: 18,
        name: "Acorn Bomb",
        imgUrl: "./assets/images/18.png"
    },
    {
        number: 19,
        name: "Bomb Toss",
        imgUrl: "./assets/images/19.png"
    },
    {
        number: 20,
        name: "Off-guard",
        imgUrl: "./assets/images/20.png"
    },
    {
        number: 21,
        name: "Self-destruct",
        imgUrl: "./assets/images/21.png"
    },
    {
        number: 22,
        name: "Transfusion",
        imgUrl: "./assets/images/22.png"
    },
    {
        number: 23,
        name: "Faze",
        imgUrl: "./assets/images/23.png"
    },
    {
        number: 24,
        name: "Flying Sardine",
        imgUrl: "./assets/images/24.png"
    },
    {
        number: 25,
        name: "Snort",
        imgUrl: "./assets/images/25.png"
    },
    {
        number: 26,
        name: "4-tonze Weight",
        imgUrl: "./assets/images/26.png"
    },
    {
        number: 27,
        name: "The Look",
        imgUrl: "./assets/images/27.png"
    },
    {
        number: 28,
        name: "Bad Breath",
        imgUrl: "./assets/images/28.png"
    },
    {
        number: 29,
        name: "Diamondback",
        imgUrl: "./assets/images/29.png"
    },
    {
        number: 30,
        name: "Mighty Guard",
        imgUrl: "./assets/images/30.png"
    },
    {
        number: 31,
        name: "Sticky Tongue",
        imgUrl: "./assets/images/31.png"
    },
    {
        number: 32,
        name: "Toad Oil",
        imgUrl: "./assets/images/32.png"
    },{
        number: 33,
        name: "The Ram's Voice",
        imgUrl: "./assets/images/33.png"
    },
    {
        number: 34,
        name: "The Dragon's Voice",
        imgUrl: "./assets/images/34.png"
    },
    {
        number: 35,
        name: "Missile",
        imgUrl: "./assets/images/35.png"
    },
    {
        number: 36,
        name: "1000 Needles",
        imgUrl: "./assets/images/36.png"
    },
    {
        number: 37,
        name: "Ink Jet",
        imgUrl: "./assets/images/37.png"
    },
    {
        number: 38,
        name: "Fire Angon",
        imgUrl: "./assets/images/38.png"
    },
    {
        number: 39,
        name: "Moon Flute",
        imgUrl: "./assets/images/39.png"
    },
    {
        number: 40,
        name: "Tail Screw",
        imgUrl: "./assets/images/40.png"
    },
    {
        number: 41,
        name: "Mind Blast",
        imgUrl: "./assets/images/41.png"
    },
    {
        number: 42,
        name: "Doom",
        imgUrl: "./assets/images/42.png"
    },
    {
        number: 43,
        name: "Peculiar Light",
        imgUrl: "./assets/images/43.png"
    },
    {
        number: 44,
        name: "Feather Rain",
        imgUrl: "./assets/images/44.png"
    },
    {
        number: 45,
        name: "Eruption",
        imgUrl: "./assets/images/45.png"
    },
    {
        number: 46,
        name: "Mountain Buster",
        imgUrl: "./assets/images/46.png"
    },
    {
        number: 47,
        name: "Shock Strike",
        imgUrl: "./assets/images/47.png"
    },
    {
        number: 48,
        name: "Glass Dance",
        imgUrl: "./assets/images/48.png"
    },
    {
        number: 49,
        name: "Veil of the Whorl",
        imgUrl: "./assets/images/49.png"
    },
    {
        number: 50,
        name: "Alpine Draft",
        imgUrl: "./assets/images/50.png"
    },
    {
        number: 51,
        name: "Protean Wave",
        imgUrl: "./assets/images/51.png"
    },
    {
        number: 52,
        name: "Northerlies",
        imgUrl: "./assets/images/52.png"
    },
    {
        number: 53,
        name: "Electrogenesis",
        imgUrl: "./assets/images/53.png"
    },
    {
        number: 54,
        name: "Kaltstrahl",
        imgUrl: "./assets/images/54.png"
    },
    {
        number: 55,
        name: "Abyssal Transfixion",
        imgUrl: "./assets/images/55.png"
    },
    {
        number: 56,
        name: "Chirp",
        imgUrl: "./assets/images/56.png"
    },
    {
        number: 57,
        name: "Eerie Soundwave",
        imgUrl: "./assets/images/57.png"
    },
    {
        number: 58,
        name: "Pom Cure",
        imgUrl: "./assets/images/58.png"
    },
    {
        number: 59,
        name: "Gobskin",
        imgUrl: "./assets/images/59.png"
    },
    {
        number: 60,
        name: "Magic Hammer",
        imgUrl: "./assets/images/60.png"
    },
    {
        number: 61,
        name: "Avail",
        imgUrl: "./assets/images/61.png"
    },
    {
        number: 62,
        name: "Frog Legs",
        imgUrl: "./assets/images/62.png"
    },
    {
        number: 63,
        name: "Sonic Boom",
        imgUrl: "./assets/images/63.png"
    },
    {
        number: 64,
        name: "Whistle",
        imgUrl: "./assets/images/64.png"
    },
    {
        number: 65,
        name: "White Knight's Tour",
        imgUrl: "./assets/images/65.png"
    },
    {
        number: 66,
        name: "Black Knight's Tour",
        imgUrl: "./assets/images/66.png"
    },
    {
        number: 67,
        name: "Level 5 Death",
        imgUrl: "./assets/images/67.png"
    },
    {
        number: 68,
        name: "Launcher",
        imgUrl: "./assets/images/68.png"
    },
    {
        number: 69,
        name: "Perpetual Ray",
        imgUrl: "./assets/images/69.png"
    },
    {
        number: 70,
        name: "Cactguard",
        imgUrl: "./assets/images/70.png"
    },
    {
        number: 71,
        name: "Revenge Blast",
        imgUrl: "./assets/images/71.png"
    },
    {
        number: 72,
        name: "Angel Whisper",
        imgUrl: "./assets/images/72.png"
    },
    {
        number: 73,
        name: "Exuviation",
        imgUrl: "./assets/images/73.png"
    },
    {
        number: 74,
        name: "Reflux",
        imgUrl: "./assets/images/74.png"
    },
    {
        number: 75,
        name: "Devour",
        imgUrl: "./assets/images/75.png"
    },
    {
        number: 76,
        name: "Condensed Libra",
        imgUrl: "./assets/images/76.png"
    },
    {
        number: 77,
        name: "Aetherial Mimicry",
        imgUrl: "./assets/images/77.png"
    },
    {
        number: 78,
        name: "Surpanakha",
        imgUrl: "./assets/images/78.png"
    },
    {
        number: 79,
        name: "Quasar",
        imgUrl: "./assets/images/79.png"
    },
    {
        number: 80,
        name: "J Kick",
        imgUrl: "./assets/images/80.png"
    }
]

let hotbarState = [
    {
        barPos: $("#ld1"),
        spell: spellsData[0],
        posName: "LD1"
    },
    {
        barPos: $("#ld2"),
        spell: spellsData[0],
        posName: "LD2"
    },
    {
        barPos: $("#ld3"),
        spell: spellsData[0],
        posName: "LD3"
    },
    {
        barPos: $("#ld4"),
        spell: spellsData[0],
        posName: "LD4"
    },
    {
        barPos: $("#la1"),
        spell: spellsData[0],
        posName: "LA1"
    },
    {
        barPos: $("#la2"),
        spell: spellsData[0],
        posName: "LA2"
    },
    {
        barPos: $("#la3"),
        spell: spellsData[0],
        posName: "LA3"
    },
    {
        barPos: $("#la4"),
        spell: spellsData[0],
        posName: "LA4"
    },
    {
        barPos: $("#rd1"),
        spell: spellsData[0],
        posName: "RD1"
    },
    {
        barPos: $("#rd2"),
        spell: spellsData[0],
        posName: "RD2"
    },
    {
        barPos: $("#rd3"),
        spell: spellsData[0],
        posName: "RD3"
    },
    {
        barPos: $("#rd4"),
        spell: spellsData[0],
        posName: "RD4"
    },
    {
        barPos: $("#ra1"),
        spell: spellsData[0],
        posName: "RA1"
    },
    {
        barPos: $("#ra2"),
        spell: spellsData[0],
        posName: "RA2"
    },
    {
        barPos: $("#ra3"),
        spell: spellsData[0],
        posName: "RA3"
    },
    {
        barPos: $("#ra4"),
        spell: spellsData[0],
        posName: "RA4"
    },
]

