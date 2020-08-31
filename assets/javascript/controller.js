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
        for (var i = 0; i < hotbarState.length; i++) {
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

