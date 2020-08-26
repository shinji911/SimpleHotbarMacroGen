//ready js
$(function () {
    let currentBtn = 0;
    let currentHotbar = 0;
    let curBtnMsg = $("#curBtnMsg");
    let spellsPool = $("#spellsPool");
    let hotbarMenu = $("#hotbarMenu");
    let macroResult = $("#macroResult");

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
        currentHotbar = $(this).text();
        hotbarMenu.text(currentHotbar);
        resetHotbar();
        renderBar();
    });

    $("#genMacro").click(function() {
        macroResult.empty();
        hotbarState.forEach(bar => {
            if (bar.spell.number != 0) {
                let line = $("<p>").text(`/chotbar blueAction "` + bar.spell.name + `" ` + currentHotbar + ` ` + bar.posName);
                macroResult.append(line);
            };
        });
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
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/5/58/Action_Command.png"
    },
    {
        number: 1,
        name: "Water Cannon",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/c/ca/Water_Cannon.png"
    },
    {
        number: 2,
        name: "Flame Thrower",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/7/76/Flame_Thrower.png"
    },
    {
        number: 3,
        name: "Aqua Breath",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/f/f2/Aqua_Breath.png"
    },
    {
        number: 4,
        name: "Flying Frenzy",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/8/85/Flying_Frenzy.png"
    },
    {
        number: 5,
        name: "Drill Cannons",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/2/20/Drill_Cannons.png"
    },
    {
        number: 6,
        name: "High Voltage",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/d/d9/High_Voltage.png"
    },
    {
        number: 7,
        name: "Loom",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/3/3b/Loom.png"
    },
    {
        number: 8,
        name: "Final Sting",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/5/5d/Final_Sting.png"
    },
    {
        number: 9,
        name: "Song of Torment",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/f/f4/Song_of_Torment.png"
    },
    {
        number: 10,
        name: "Glower",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/b/b1/Glower.png"
    },
    {
        number: 11,
        name: "Plaincracker",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/6/68/Plaincracker.png"
    },
    {
        number: 12,
        name: "Bristle",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/1/19/Bristle.png"
    },
    {
        number: 13,
        name: "White Wind",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/a/a1/White_Wind.png"
    },
    {
        number: 14,
        name: "Level 5 Petrify",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/a/a9/Level_5_Petrify.png"
    },
    {
        number: 15,
        name: "Sharpened Knife",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/5/50/Sharpened_Knife.png"
    },
    {
        number: 16,
        name: "Ice Spikes",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/0/08/Ice_Spikes.png"
    },
    {
        number: 17,
        name: "Blood Drain",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/3/3a/Blood_Drain.png"
    },
    {
        number: 18,
        name: "Acorn Bomb",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/a/a0/Acorn_Bomb.png"
    },
    {
        number: 19,
        name: "Bomb Toss",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/8/8b/Bomb_Toss.png"
    },
    {
        number: 20,
        name: "Off-guard",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/e/ee/Off-guard.png"
    },
    {
        number: 21,
        name: "Self-destruct",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/3/37/Self-destruct.png"
    },
    {
        number: 22,
        name: "Transfusion",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/6/66/Transfusion.png"
    },
    {
        number: 23,
        name: "Faze",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/5/5a/Faze.png"
    },
    {
        number: 24,
        name: "Flying Sardine",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/2/20/Flying_Sardine.png"
    },
    {
        number: 25,
        name: "Snort",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/1/15/Snort.png"
    },
    {
        number: 26,
        name: "4-tonze Weight",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/6/6b/4-tonze_Weight.png"
    },
    {
        number: 27,
        name: "The Look",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/d/d9/The_Look.png"
    },
    {
        number: 28,
        name: "Bad Breath",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/c/c7/Bad_Breath.png"
    },
    {
        number: 29,
        name: "Diamondback",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/c/c5/Diamondback.png"
    },
    {
        number: 30,
        name: "Mighty Guard",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/0/07/Mighty_Guard.png"
    },
    {
        number: 31,
        name: "Sticky Tongue",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/4/4b/Sticky_Tongue.png"
    },
    {
        number: 32,
        name: "Toad Oil",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/4/47/Toad_Oil.png"
    },{
        number: 33,
        name: "The Ram's Voice",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/0/00/The_Ram%27s_Voice.png"
    },
    {
        number: 34,
        name: "The Dragon's Voice",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/5/59/The_Dragon%27s_Voice.png"
    },
    {
        number: 35,
        name: "Missile",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/f/fc/Missile.png"
    },
    {
        number: 36,
        name: "1000 Needles",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/c/cd/1000_Needles.png"
    },
    {
        number: 37,
        name: "Ink Jet",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/7/76/Ink_Jet.png"
    },
    {
        number: 38,
        name: "Fire Angon",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/0/03/Fire_Angon.png"
    },
    {
        number: 39,
        name: "Moon Flute",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/a/a5/Moon_Flute.png"
    },
    {
        number: 40,
        name: "Tail Screw",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/7/74/Tail_Screw.png"
    },
    {
        number: 41,
        name: "Mind Blast",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/6/61/Mind_Blast.png"
    },
    {
        number: 42,
        name: "Doom",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/0/0b/Doom.png"
    },
    {
        number: 43,
        name: "Peculiar Light",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/8/84/Peculiar_Light.png"
    },
    {
        number: 44,
        name: "Feather Rain",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/9/9f/Feather_Rain.png"
    },
    {
        number: 45,
        name: "Eruption",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/5/52/Eruption.png"
    },
    {
        number: 46,
        name: "Mountain Buster",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/e/e5/Mountain_Buster.png"
    },
    {
        number: 47,
        name: "Shock Strike",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/b/b5/Shock_Strike.png"
    },
    {
        number: 48,
        name: "Glass Dance",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/a/a8/Glass_Dance.png"
    },
    {
        number: 49,
        name: "Veil of the Whorl",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/2/2c/Veil_of_the_Whorl.png"
    },
    {
        number: 50,
        name: "Alpine Draft",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/8/8d/Alpine_Draft.png"
    },
    {
        number: 51,
        name: "Protean Wave",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/9/95/Protean_Wave.png"
    },
    {
        number: 52,
        name: "Northerlies",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/4/4c/Northerlies.png"
    },
    {
        number: 53,
        name: "Electrogenesis",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/b/ba/Electrogenesis.png"
    },
    {
        number: 54,
        name: "Kaltstrahl",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/8/88/Kaltstrahl.png"
    },
    {
        number: 55,
        name: "Abyssal Transfixion",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/e/ed/Abyssal_Transfixion.png"
    },
    {
        number: 56,
        name: "Chirp",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/3/33/Chirp.png"
    },
    {
        number: 57,
        name: "Eerie Soundwave",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/d/db/Eerie_Soundwave.png"
    },
    {
        number: 58,
        name: "Pom Cure",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/c/cb/Pom_Cure.png"
    },
    {
        number: 59,
        name: "Gobskin",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/9/95/Gobskin.png"
    },
    {
        number: 60,
        name: "Magic Hammer",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/a/a9/Magic_Hammer.png"
    },
    {
        number: 61,
        name: "Avail",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/b/b6/Avail.png"
    },
    {
        number: 62,
        name: "Frog Legs",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/5/52/Frog_Legs.png"
    },
    {
        number: 63,
        name: "Sonic Boom",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/7/7c/Sonic_Boom.png"
    },
    {
        number: 64,
        name: "Whistle",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/1/18/Whistle.png"
    },
    {
        number: 65,
        name: "White Knight's Tour",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/9/9c/White_Knight%27s_Tour.png"
    },
    {
        number: 66,
        name: "Black Knight's Tour",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/a/af/Black_Knight%27s_Tour.png"
    },
    {
        number: 67,
        name: "Level 5 Death",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/0/01/Level_5_Death.png"
    },
    {
        number: 68,
        name: "Launcher",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/8/85/Launcher.png"
    },
    {
        number: 69,
        name: "Perpetual Ray",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/3/39/Perpetual_Ray.png"
    },
    {
        number: 70,
        name: "Cactguard",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/8/8c/Cactguard.png"
    },
    {
        number: 71,
        name: "Revenge Blast",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/f/fa/Revenge_Blast.png"
    },
    {
        number: 72,
        name: "Angel Whisper",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/d/d2/Angel_Whisper.png"
    },
    {
        number: 73,
        name: "Exuviation",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/3/38/Exuviation.png"
    },
    {
        number: 74,
        name: "Reflux",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/d/dc/Reflux.png"
    },
    {
        number: 75,
        name: "Devour",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/3/3d/Devour.png"
    },
    {
        number: 76,
        name: "Condensed Libra",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/c/c0/Condensed_Libra.png"
    },
    {
        number: 77,
        name: "Aetherial Mimicry",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/9/9a/Aetherial_Mimicry.png"
    },
    {
        number: 78,
        name: "Surpanakha",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/e/e8/Surpanakha.png"
    },
    {
        number: 79,
        name: "Quasar",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/3/3e/Quasar.png"
    },
    {
        number: 80,
        name: "J Kick",
        imgUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/6/65/J_Kick.png"
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

