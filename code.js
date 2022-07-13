let obj = [
    {
        name: "sushi frio",
        data: [
            {
                plat: "salmontino",
                ingr: "Pasta tampico, philadelphia, pepino, zanahoria, por fuera salmón ahumado y aguacate.",
                cost: 85,
            }, {
                plat: "kioto roll",
                ingr: "Salmon sellado, philadelphia, pasta tampico y aguacate.",
                cost: 85,
            }, {
                plat: "cangrejo roll",
                ingr: "Surimi empanizado, pepino, aguacate, alga por fuera y champiñon.",
                cost: 75,
            }, {
                plat: "cheese roll",
                ingr: "Forrado de queso manchego. aderezo de chipotle, camaron empanizado , philadelphia y aguacate",
                cost: 75,
            }, {
                plat: "dieta roll",
                ingr: "Surimi, philadelphia, aguacate envuelto en hoja de pepino.",
                cost: 75,
            }, {
                plat: "loco roll",
                ingr: "Camaron, philadelphia, aguacate envuelto en tocino con queso manchego gratinado",
                cost: 75,
            }, {
                plat: "macho roll",
                ingr: "Camaron empanizado, aguacate, philadelphia, envuelto en plátano frito y salsa de anguila.",
                cost: 70,
            }, {
                plat: "green roll",
                ingr: "Camaron, pepino, aguacate, envuelto en kiwi con salsa de anguila.",
                cost: 70,
            }, {
                plat: "amai maki",
                ingr: "Surimi empanizado, aguacate, philadelphia, pepino por fuera con salsa dulce picante.",
                cost: 70,
            }, {
                plat: "kanikama maki",
                ingr: "Surimi, pasta tampico por dentro y por fuera.",
                cost: 70,
            }, {
                plat: "tropical roll",
                ingr: "Surimi, pepino, philadelphia, envuelto en mango con salsa de anguila.",
                cost: 65,
            }, {
                plat: "palto maki",
                ingr: "Camarón, pepino, philadelphia, aguacate por fuera y ajonjolí.",
                cost: 65,
            }, {
                plat: "california maki",
                ingr: "Camaron, pepino, aguacate y ajonjolí por fuera.",
                cost: 55,
            }
        ]
    },
    {
        name: "sushi empanizado",
        data: [
            {
                plat: "delux roll",
                ingr: "Camaron empanizado, aguacate, philadelphia, empanizado por fuera gratinado con queso manchego al chipotle y tocino.",
                cost: 0,
            },
            {
                plat: "mar y tierra",
                ingr: "Camaron, res, pollo en teriyaki, manchego, empanizado por fuera.",
                cost: 0,
            },
            {
                plat: "dragon roll",
                ingr: "Res a la plancha, queso manchego, chiles toreados, empanizado por fuera.",
                cost: 0,
            },
            {
                plat: "coco roll",
                ingr: "Surimi empanizado, aguacate, philadelphia, empanizado por fuera y dulce de coco.",
                cost: 0,
            },
            {
                plat: "sweet roll",
                ingr: "Pollo en teriyaki, philadelphia, queso manchego, empanizado.",
                cost: 0,
            },
            {
                plat: "hot roll",
                ingr: "Camaron empanizado, aguacate, philadelphia, empanizado por fuera y chipotle.",
                cost: 0,
            },
            {
                plat: "dishi maki",
                ingr: "Surimi empanizado, aguacate, queso manchego con salsa dulce picante, empanizado por fuera.",
                cost: 0,
            },
            {
                plat: "queso maki",
                ingr: "Philadelphia, queso manchego, empanizado. por fuera",
                cost: 0,
            },
        ]
    },
]
obj.map(o => {
    console.log("__");
    console.log(o.name.toUpperCase());
    console.log("/*");
    o.data.map(d => {
        console.log("    Platillo: " +  d.plat);
        console.log("    Ingedientes: " +  d.ingr);
        console.log("    Costo: " +  d.cost);
    })
    console.log("*/");
})