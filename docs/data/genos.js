const DATA = {
  title: "Genos",
  title_icon: "icon_63_5",
  title_class: "genos",
  video: "",
  tagline: "Typical DPS build for Genos.",
  categories: [
    {
      category: "Weapon",
      sections: [
        {
          section: "",
          row: 1,
          entries: [
            {
              name: "Unlimited",
              icon: "40661",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          entries: [
            {
              name: "Shell Chepet ★ Card",
              icon_card: "24113",
              stat: "17.5% Spell Crit, 5 Int/Luk",
            },
            {
              name: "Incantation Samurai Card",
              icon_card: "23055",
              stat: "15% MPen",
            },
            { br: true },
            {
              name: "Phreeoni ★ Card",
              icon_card: "24611",
              stat: "10% Skill Dmg (+1% w/ depo)",
            },
            {
              name: "Firelord Kaho ★ Card",
              icon_card: "50129",
              stat: "15% Fire Dmg",
            },
          ],
          subsections: [
            {
              align: "column",
              sections: [
                {
                  section: "PVP",
                  entries: [
                    {
                      name: "Hydra ★ Card",
                      bold: true,
                      icon_card: "24110",
                      stat: "15% Dmg to Demihuman Race, 5% Dmg to Players (+1% w/ depo)",
                    },
                  ],
                },
                {
                  section: "PVE",
                  entries: [
                    {
                      name: "Fire Bird Chiri ★ Card",
                      icon_card: "24668",
                      stat: "45% Ignore MDef vs. MVP (+5% w/ depo)",
                    },
                    {
                      name: "Channeller Card",
                      icon_card: "23265",
                      stat: "15% Final Dmg to Large, 5% Dmg to MVP",
                      note: "BCC Box",
                    },
                    { br: true },
                    {
                      name: "Abysmal Knight ★ Card",
                      icon_card: "24117",
                      stat: "15% Dmg to MVP (+5% w/ depo)",
                    },
                    {
                      name: "Seed of Yggdrasil Card",
                      icon_card: "23056",
                      stat: "5% Magic Lifesteal",
                      note: "for survivability in most content",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Off-Hand",
      sections: [
        {
          section: "Main",
          row: 1,
          entries: [
            {
              name: "Wisdom Totem",
              bold: true,
              icon: "42609",
              ae_attr: "18% MDmg",
            },
            {
              name: "Othershore Web",
              icon: "42640",
              ae_attr: "18% MPen",
            },
            {
              name: "Devil Skull",
              icon: "42634",
              ae_attr: "30% Ignore MDef",
            },
          ],
        },
        {
          section: "Shadow",
          row: 1,
          entries: [
            {
              name: "Creeper Agreement",
              icon: "42586",
              note: "for Ignore MDef%",
            },
            {
              name: "Peak Platter",
              icon: "42585",
              note: "for MPen%/MAtk%",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          entries: [
            {
              name: "Wicked Sunflower ★ Card",
              bold: true,
              icon_card: "24102",
              stat: "Magic AoE Dmg +1% per Off-Hand refine",
            },
          ],
          subsections: [
            {
              align: "row",
              sections: [
                {
                  section: "PVP",
                  entries: [
                    {
                      name: "Ore Spirit Card",
                      icon_card: "22044",
                      stat: "Final Dmg +5% per abnormal status",
                    },
                    {
                      name: "Maya ★ Card",
                      icon_card: "24606",
                      stat: "20% Magic Reflect",
                    },
                    {
                      name: "Dead Time Holder Card",
                      light: true,
                      icon_card: "24516",
                      stat: "15% Dmg to Demihuman, 15% Demihuman Reduc",
                      note: "in your dreams",
                    },
                  ],
                },
                {
                  section: "PVE",
                  entries: [
                    {
                      name: "Alice ★ Card",
                      icon_card: "24634",
                      stat: "15% Dmg to MVP",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Armor",
      sections: [
        {
          section: "Main",
          row: 1,
          entries: [
            {
              name: "Dreameater's Disguise",
              bold: true,
              icon: "42155",
              ae_attr: "20% Fire/Water/Wind/Earth/Neutral Dmg",
            },
            {
              name: "Wisdom Sacrificial Garb",
              icon: "42152",
              ae_attr: "20% Fire/Water/Wind/Earth/Neutral Dmg",
            },
          ],
        },
        {
          section: "Shadow",
          row: 1,
          entries: [
            {
              name: "Star Shatter's Gown",
              icon: "42090",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          entries: [
            {
              name: "Alien Nidhogg Card",
              icon_card: "23239",
              stat: "20% Ignore MDef",
              note: "BCC Box",
            },
            {
              name: "Munak ★ Card",
              icon_card: "24039",
              stat: "15% Ignore MDef",
            },
            { br: true },
            {
              name: "Sorcerer Card",
              icon_card: "23186",
              stat: "5% MDmg",
              note: "BCC Box",
            },
            {
              name: "Angeling ★ Card",
              icon_card: "24666",
              stat: "Holy armor, 5% All Race Dmg, 30% Demihuman Reduc",
            },
          ],
          subsections: [
            {
              align: "row",
              sections: [
                {
                  section: "PVP",
                  entries: [
                    {
                      name: "Chimera ★ Card",
                      icon_card: "24601",
                      stat: "20% Final Dmg to Poisoned targets, 3% Poison proc on physical hit",
                    },
                  ],
                },
                {
                  section: "PVE",
                  entries: [
                    {
                      name: "Poi Tata ★ Card",
                      bold: true,
                      icon_card: "24670",
                      stat: "25% Dmg to Non-Demihuman Race",
                    },
                    {
                      name: "Hart Card",
                      icon_card: "23153",
                      stat: "10% Dmg to MVP",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Garment",
      sections: [
        {
          section: "Main",
          row: 1,
          entries: [
            {
              name: "Classic Robe",
              bold: true,
              icon: "43086",
              ae_attr: "12% Skill Dmg",
            },
          ],
        },
        {
          section: "Shadow",
          row: 1,
          entries: [
            {
              name: "Divine Feather Clothes",
              icon: "43063",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          entries: [
            {
              name: "Zanubia Card",
              bold: true,
              icon_card: "23063",
              stat: "6% Skill Dmg +0.1% per 12 Str/Dex/Int",
            },
            {
              name: "Eclipse ★ Card",
              icon_card: "24615",
              stat: "10 Vit, MaxHP +0.5% per 12 Vit",
            },
            {
              name: "Harpy ★ Card",
              icon_card: "24099",
              stat: "MAtk +0.1% per 6 Int",
            },
            { br: true },
            {
              name: "Firelord Dead Kaho Card",
              light: true,
              icon_card: "24518",
              stat: "5% MDmg +10% vs. abnormal status",
              note: "in your dreams",
            },
            {
              name: "Dead Eddga Card",
              light: true,
              icon_card: "24507",
              stat: "Final Dmg +2% per 10% HP lost",
              note: "in your dreams",
            },
          ],
          subsections: [
            {
              align: "row",
              sections: [
                {
                  section: "PVP",
                  entries: [
                    {
                      name: "Devil Squid Card",
                      icon_card: "23058",
                      stat: 'Learn "Stealth" (+10% MDmg when hiding)',
                      note: "only useful with Moonlight Flower ★ Card",
                    },
                  ],
                },
                {
                  section: "PVE",
                  entries: [
                    {
                      name: "Mayfair Linse Card",
                      icon_card: "23154",
                      stat: "5% Dmg to MVP",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Shoes",
      sections: [
        {
          section: "Main",
          row: 1,
          entries: [
            {
              name: "Orderly Ankle Boots",
              bold: true,
              icon: "43617",
              ae_attr: "6% MPen",
            },
            {
              name: "Glorious War Boots",
              icon: "43605",
              ae_attr: "6% MDmg",
            },
          ],
        },
        {
          section: "Shadow",
          row: 1,
          entries: [
            {
              name: "Saint Mary's Cloth Shoes",
              icon: "43580",
            },
            {
              name: "White Gem Boots",
              icon: "43581",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          entries: [
            {
              name: "Dark Lord ★ Card",
              icon_card: "24642",
              stat: '20% "Meteor Storm" proc on hit, 25% abnormal status res',
            },
            {
              name: "Alien Puppet Card",
              icon_card: "23242",
              stat: "Final Dmg +0.1% per 1000 MaxSP",
              note: "BCC Box",
            },
            {
              name: "Nigel Bird Card",
              icon_card: "20190",
              stat: "5 Str/Vit",
            },
            {
              name: "Familiar ★ Card",
              light: true,
              icon_card: "24071",
              stat: "3% MAtk",
            },
            { br: true },
            {
              name: "Flute Player ★ Card",
              light: true,
              icon_card: "24644",
              stat: "5 Agi, 15% Move Speed +15% under abnormal status",
            },
            {
              name: "Moonlight Flower ★ Card",
              light: true,
              icon_card: "24608",
              stat: "30% Move Speed, Immune to speed reduc",
              note: "in your dreams",
            },
            {
              name: "Eddga ★ Card",
              light: true,
              icon_card: "24607",
              stat: 'Permanent "Endure" status',
              note: "in your dreams",
            },
            {
              name: "Detarderous the Dead Card",
              light: true,
              icon_card: "24512",
              stat: "5% MPen",
              note: "in your dreams",
            },
          ],
          subsections: [
            {
              align: "row",
              sections: [
                {
                  section: "PVP",
                  entries: [
                    {
                      name: "Fallen Bishop Card",
                      bold: true,
                      icon_card: "22036",
                      stat: "15% Dmg to Demihuman",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Accessories",
      sections: [
        {
          section: "Main",
          row: 1,
          entries: [
            {
              name: "Essence of Scorching Flame",
              bold: true,
              icon: "44115",
              ae_attr: "12% Fire Dmg",
            },
            {
              name: "Guide's Brooch",
              icon: "44121",
              ae_attr: "9% MPen",
            },
            {
              name: "Floral Hair Clip",
              icon: "44109",
              ae_attr: "15% MAtk",
            },
            {
              name: "Ring of Light and Shadow",
              light: true,
              icon: "44091",
              ae_attr: "15% MAtk",
            },
          ],
        },
        {
          section: "Shadow",
          row: 1,
          entries: [
            {
              name: "Flame Feather",
              icon: "44055",
              bold: true,
            },
            {
              name: "Tibbers' Hand",
              icon: "44049",
            },
            {
              name: "Kraken's Eye",
              icon: "44051",
            },
            {
              name: "Time Manipulator",
              icon: "44061",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          entries: [
            {
              name: "Witch of Calamity Card",
              bold: true,
              icon_card: "23064",
              stat: "10% Spell Crit, 20 Luk",
            },
            {
              name: "Moonlight Tendrilion ★ Card",
              icon_card: "24118",
              stat: "2% Skill Dmg, 3% Dmg to Non-Demihuman Race",
            },
            { br: true },
            {
              name: "Fire Witch ★ Card",
              icon_card: "24623",
              stat: "8% Ignore MDef",
            },
            {
              name: "Magic Snake Card",
              icon_card: "24060",
              stat: "2% MPen",
            },
          ],
          subsections: [
            {
              align: "row",
              sections: [
                {
                  section: "PVP",
                  entries: [
                    {
                      name: "Smokie Card",
                      icon_card: "22001",
                      stat: 'Learn "Hiding"',
                      note: "only useful with Moonlight Flower ★ Card",
                    },
                  ],
                },
                {
                  section: "PVE",
                  entries: [
                    {
                      name: "Ultraman Card",
                      icon_card: "23114",
                      stat: "8% Dmg to Brute/Demon",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Headgear",
      sections: [
        {
          section: "",
          row: 1,
          entries: [
            {
              name: 'Wheel of Fortune - Four-leaf Clover ("Koi")',
              bold: true,
              icon: "149065",
              stat: "20% Spell Crit",
              note: "Time Wish",
            },
            {
              name: "Homestead of Snowy Owl",
              icon: "3005800",
              stat: "10% Fire/Water/Wind/Earth Dmg, 10% Final Dmg to weak element",
              note: "May 2022 Blue Gacha",
            },
            { br: true },
            {
              name: "Holy Night Blessing",
              icon: "3004870",
              stat: "12% Skill Dmg",
              note: "Dec 2021 Blue Gacha",
            },
            {
              name: "+X Saint Token",
              icon: "149627",
              stat: "2% Skill Dmg +1% per refine",
              note: "F2P",
            },
          ],
          subsections: [
            {
              align: "row",
              sections: [
                {
                  section: "PVP",
                  entries: [
                    {
                      name: "+X Witch's Oath",
                      icon: "149648",
                      stat: "5% Final Dmg to Medium +1% per refine",
                      note: "F2P",
                    },
                    {
                      name: "Eggshell Biu",
                      icon: "149081",
                      stat: "Immune to Equipment Break",
                      note: "Time Wish",
                    },
                  ],
                },
                {
                  section: "PVE",
                  entries: [
                    {
                      name: "Music of Soul",
                      icon: "3007190",
                      stat: "25% Final Dmg to Large",
                      note: "Feb 2023 Blue Gacha",
                    },
                    {
                      name: "+6 Bashful Moment",
                      icon: "3003390",
                      stat: "15% Dmg to MVP",
                      note: "May 2021 Blue Gacha",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          entries: [
            {
              name: "Walter Card",
              icon_card: "23067",
              stat: "5% Skill Dmg, 5% Final Dmg to >50% HP targets (all targets w/ depo)",
            },
            {
              name: "Katerina Card",
              icon_card: "23040",
              stat: "8% MPen",
            },
            { br: true },
            {
              name: "Sealed Apocalypse Card",
              icon_card: "24002",
              stat: "10% Ignore MDef",
            },
            {
              name: "Revenant Owl Baron Card",
              light: true,
              icon_card: "24504",
              stat: '20% "Lex Aeterna" proc on skills (+25% w/ Owl Baron Card)',
              note: "in your dreams",
            },
          ],
          subsections: [
            {
              align: "row",
              sections: [
                {
                  section: "PVP",
                  entries: [
                    {
                      name: "Mentalist Card",
                      icon_card: "24621",
                      stat: "Immune to Fear",
                    },
                    {
                      name: "Nightmare Card",
                      icon_card: "20065",
                      stat: "Immune to Sleep",
                    },
                    {
                      name: "Orc Hero Card",
                      light: true,
                      icon_card: "23014",
                      stat: "Immune to Stun",
                      note: "in your dreams",
                    },
                  ],
                },
                {
                  section: "PVE",
                  entries: [
                    {
                      name: "Machine Dragon Wing Card",
                      icon_card: "23220",
                      stat: "15% Dmg to MVP",
                    },
                    {
                      name: "Norman Card",
                      icon_card: "23155",
                      stat: "5% Dmg to MVP",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Face",
      sections: [
        {
          section: "",
          row: 1,
          entries: [
            {
              name: "Winter Crown",
              icon: "3002900",
              stat: "9% Skill Dmg",
              note: "Dec 2020 Blue Gacha",
            },
            {
              name: "+10 Silent Sinking",
              icon: "149199",
              stat: "8% Skill Dmg",
              note: "F2P",
            },
            {
              name: "+X Epic Spirit-Lightning",
              icon: "48598",
              stat: "10% Wind Dmg +1% per refine",
              note: "F2P",
            },
            { br: true },
            {
              name: "+6 Tales from the Sea",
              icon: "3005990",
              stat: "10% MPen",
              note: "Jun 2022 Blue Gacha",
            },
            {
              name: "Dancing Flame",
              icon: "3000241",
              stat: "5% Fire Dmg, 5% MPen",
              note: "Jul 2019 Blue Gacha",
            },
            {
              name: "+X Monocle",
              light: true,
              icon: "48525",
              stat: "5% MAtk +1% per refine",
              note: "F2P",
            },
          ],
          subsections: [
            {
              align: "row",
              sections: [
                {
                  section: "PVE",
                  entries: [
                    {
                      name: "+6 Cute Blower",
                      icon: "3006940",
                      stat: "15% Dmg to MVP",
                      note: "Dec 2022 Blue Gacha",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Mouth",
      sections: [
        {
          section: "",
          row: 1,
          entries: [
            {
              name: "Light Food",
              icon: "3003060",
              stat: "5% Skill Dmg",
              note: "Jan 2021 Blue Gacha",
            },
            {
              name: "Honey Bunny",
              icon: "3007180",
              stat: "5% Skill Dmg (+3% at full HP)",
              note: "Jan 2023 Blue Gacha",
            },
            {
              name: "Golden Shower near the Mouth",
              icon: "3007893",
              stat: "30 Luk, 15 Vit",
              note: "Apr 2023 BCC Box",
            },
            { br: true },
            {
              name: "Clamor Cane",
              icon: "3004872",
              stat: "4% MPen, Stun proc",
              note: "Dec 2021 Blue Gacha",
            },
            {
              name: "+6 Magic Feather Pen",
              icon: "3005801",
              stat: "13% Ignore MDef",
              note: "May 2022 Blue Gacha",
            },
          ],
          subsections: [
            {
              align: "column",
              sections: [
                {
                  section: "PVE",
                  entries: [
                    {
                      name: "+6 Ocean's Attachment",
                      icon: "3007240",
                      stat: "13% Dmg to MVP, 5% Move Speed",
                      note: "Jul 2023 Blue Gacha",
                    },
                    {
                      name: "Huge Bounty",
                      icon: "3004862",
                      stat: "10% Dmg to MVP",
                      note: "Nov 2021 Blue Gacha",
                    },
                    { br: true },
                    {
                      name: "Eternal Kingship",
                      icon: "48771",
                      stat: "8% Dmg to MVP",
                      note: "F2P Kafra Adventure Log",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Back",
      sections: [
        {
          section: "",
          row: 1,
          entries: [
            {
              name: "+6 Encomiast's Movement",
              bold: true,
              icon: "3004622",
              stat: "20% Spell Crit",
              note: "Sep 2021 Blue Gacha",
            },
            {
              name: "Rathgricy - Fallen Feather",
              icon: "47180",
              stat: '5% MPen, 5% Move Speed, 10% "Lex Aeterna" proc on skills',
              note: "F2P",
            },
            {
              name: "Love Goddess",
              icon: "47056",
              stat: "10% Final Dmg",
              note: "Time Wish & BCC Box",
            },
            { br: true },
            {
              name: "Starlight Sweety",
              icon: "3000321",
              stat: "5% All Race Dmg, Sleep proc",
              note: "Aug 2019 Blue Gacha",
            },
            {
              name: "Brilliant Love",
              light: true,
              icon: "3001011",
              stat: "10% Fire Dmg",
              note: "Dec 2019 Blue Gacha",
            },
          ],
          subsections: [
            {
              align: "column",
              sections: [
                {
                  section: "PVE",
                  entries: [
                    {
                      name: "+6 Goodwill Giftbox",
                      icon: "47107",
                      stat: "15% Dmg to MVP",
                      note: "Time Wish",
                    },
                    {
                      name: "Dark Moon Shine",
                      light: true,
                      icon: "3033307",
                      stat: "8% Dmg to MVP",
                      note: "F2P",
                    },
                    { br: true },
                    {
                      name: "Siren Touch",
                      light: true,
                      icon: "47255",
                      stat: "5% Dmg to MVP +0.5% per refine",
                      note: "F2P",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Tail",
      sections: [
        {
          section: "",
          row: 1,
          entries: [
            {
              name: "Beautiful Ensemble",
              icon: "3004620",
              stat: "8% Skill Dmg",
              note: "Sep 2021 Blue Gacha",
            },
            {
              name: "+6 Earl Daemon",
              icon: "3005192",
              stat: "4% Magic AoE Dmg, 4% Fire/Water/Wind/Earth/Neutral Dmg",
              note: "Oct 2019 Blue Gacha",
            },
            {
              name: "Sea Soul's Tail",
              icon: "48086",
              stat: "4% Fire/Water/Wind/Earth Dmg",
              note: "F2P",
            },
            {
              name: "+X Tahnee's Banana Boat",
              icon: "48130",
              stat: "Skill Dmg +0.5% per refine",
              note: "F2P",
            },
            { br: true },
            {
              name: "+10 White Snake Chime",
              icon: "48087",
              stat: "3% MPen, 4% Ignore MDef",
              note: "F2P",
            },
            {
              name: "Peter Wendy",
              icon: "3001460",
              stat: "3% MPen +15% MPen for 5sec every 20sec",
              note: "Apr 2020 Blue Gacha",
            },
            {
              name: "Prince of Thunder",
              icon: "3000811",
              stat: "8% Wind Dmg, 8% Stun chance and duration",
              note: "Oct 2019 Blue Gacha",
            },
          ],
          subsections: [
            {
              align: "column",
              sections: [
                {
                  section: "PVP",
                  entries: [
                    {
                      name: "Flower Demon Valley Lily",
                      icon: "3003280",
                      stat: "10% Final Dmg to Poisoned targets, Poison proc",
                      note: "Mar 2021 Blue Gacha",
                    },
                  ],
                },
                {
                  section: "PVE",
                  entries: [
                    {
                      name: "Rock Bunny",
                      icon: "3005690",
                      stat: "10% Dmg to MVP",
                      note: "Apr 2022 Blue Gacha",
                    },
                    { br: true },
                    {
                      name: "+X Summer Banana Split",
                      icon: "48080",
                      stat: "3% Dmg to MVP +0.5% per refine",
                      note: "F2P",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Stats",
      sections: [
        {
          section: "",
          row: 1,
          entries: [
            {
              name: "Spell Crit",
              bold: true,
              stat: "158 Str, 158 Vit, 107 Luk, 3 Int",
            },
            { br: true },
            {
              name: "No Spell Crit",
              stat: "159 Str, 159 Vit, 103 Int",
            },
          ],
        },
      ],
    },
    {
      category: "Runes",
      sections: [
        {
          section: "",
          row: 1,
          entries: [],
          subsections: [
            {
              align: "column",
              sections: [
                {
                  section: "Damage",
                  entries: [
                    {
                      name: "Firepower Boost",
                      type: "Star",
                      tags: ["Atk", "Buff", "Any"],
                      icon_rune2: "item_379310",
                      stat: '"Rechargeable Incendiary Gun" Final Dmg +1~30%.',
                    },
                    { br: true },
                    {
                      name: "Thunder Dragon Impact",
                      type: "Star",
                      tags: ["Atk", "Buff", "Any"],
                      icon_rune2: "item_379310",
                      stat: '"Lightning Seal" Str/Vit +1~30.',
                    },
                  ],
                },
                {
                  section: "Utility",
                  entries: [
                    {
                      name: "Propulsion Destroy",
                      type: "S",
                      tags: ["Buff", "Buff", "Any"],
                      icon_rune2: "item_379310",
                      stat: '"Swift Momentum" disable debuff duration 1~3sec.',
                    },
                    {
                      name: "Magnetic Field Control",
                      type: "Star",
                      tags: ["Def", "Buff", "Any"],
                      icon_rune2: "item_379310",
                      stat: '"Scan" decreases enemy move speed -30~80%.\n',
                      note: "carving optional",
                    },
                    { br: true },
                    {
                      name: "Circle Endurance",
                      type: "S",
                      tags: ["Def", "Buff", "Any"],
                      icon_rune2: "item_379310",
                      stat: '"Electrical Gyration" Dmg Reduc duration +1~5sec.',
                      note: "carving optional",
                    },
                    {
                      name: "Metal Ductility",
                      type: "S",
                      tags: ["Buff", "Buff", "Any"],
                      icon_rune2: "item_379310",
                      stat: '"Mechanical Punch" range +1~3m',
                      note: "mostly useless",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
