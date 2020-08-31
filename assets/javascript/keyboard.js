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
                    let line = $("<p>").text(`/hotbar blueAction "` + bar.spell.name + `" ` + currentHotbar + ` ` + bar.posName);
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
        barPos: $("k1"),
        spell: spellsData[0],
        posName: "1"
    },
    {
        barPos: $("#k2"),
        spell: spellsData[0],
        posName: "2"
    },
    {
        barPos: $("#k3"),
        spell: spellsData[0],
        posName: "3"
    },
    {
        barPos: $("#k4"),
        spell: spellsData[0],
        posName: "4"
    },
    {
        barPos: $("#k5"),
        spell: spellsData[0],
        posName: "5"
    },
    {
        barPos: $("#k6"),
        spell: spellsData[0],
        posName: "6"
    },
    {
        barPos: $("#k7"),
        spell: spellsData[0],
        posName: "7"
    },
    {
        barPos: $("#k8"),
        spell: spellsData[0],
        posName: "8"
    },
    {
        barPos: $("#k9"),
        spell: spellsData[0],
        posName: "9"
    },
    {
        barPos: $("#k10"),
        spell: spellsData[0],
        posName: "0"
    },
    {
        barPos: $("#k11"),
        spell: spellsData[0],
        posName: "-"
    },
    {
        barPos: $("#k12"),
        spell: spellsData[0],
        posName: "="
    }
]