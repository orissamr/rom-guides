const DATA = {
  title: "Arcane Master (Auto-Attack)",
  title_icon: "icon_2_5",
  title_class: "am",
  tagline: "This Auto-Attack build optimizes for Wind burst damage while maintaining survivability.",
  slots: [
    {
      slot: "Weapon",
      sections: [
        {
          section: "",
          row: 1,
          gears: [
            {
              name: "Scepter of Shadowy Wind",
              icon: "40506",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          gears: [
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
          ],
        },
        {
          section: "Cards (PVP)",
          row: 3,
          gears: [
            {
              name: "Hydra ★ Card",
              bold: true,
              icon_card: "24110",
              stat: "15% Dmg to Demihuman Race, 5% Dmg to Players (+1% w/ depo)",
            },
            {
              name: "Stormy Knight ★ Card",
              icon_card: "24637",
              stat: '5% All Race Dmg, 20% Freeze Chance, 5% "Storm Gust" proc on AA',
              note: "recommended for GVG",
            },
            {
              name: "Dead Stormy Knight Card",
              icon_card: "24519",
              stat: "5% All Race Dmg, No Freeze Break, 10% Dmg to Frozen targets w/ Stormy Knight ★ Card",
              note: "recommended for GVG",
            },
            { br: true },
            {
              name: "Bloody Knight ★ Card",
              light: true,
              icon_card: "24630",
              stat: '5% AA Dmg, 5% "Meteor Storm" proc on AA +3% w/ Pale Lord Card',
              note: "NOT recommended",
            },
            {
              name: "Pale Lord Card",
              light: true,
              icon_card: "24055",
              stat: "10% AA Dmg +5% w/ Bloody Knight ★ Card",
              note: "NOT recommended",
            },
          ],
        },
        {
          section: "Cards (PVE)",
          row: 4,
          gears: [
            {
              name: "Fire Bird Chiri ★ Card",
              icon_card: "24668",
              stat: "45% Ignore MDef vs. MVP (+5% w/ depo)",
            },
            {
              name: "Abysmal Knight ★ Card",
              icon_card: "24117",
              stat: "15% Dmg to MVP (+5% w/ depo)",
            },
            { br: true },
            {
              name: "Channeller Card",
              icon_card: "23265",
              stat: "15% Final Dmg to Large, 5% Dmg to MVP",
              note: "BCC Box",
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
    {
      slot: "Off-Hand",
      sections: [
        {
          section: "Main",
          row: 1,
          gears: [
            {
              name: "Othershore Web",
              bold: true,
              icon: "42640",
              ae_attr: "18% MPen",
            },
            {
              name: "Wisdom Totem",
              icon: "42609",
              ae_attr: "18% MDmg",
            },
            {
              name: "Devil Skull",
              icon: "42634",
              ae_attr: "30% Ignore MDef",
            },
            {
              name: "+15 Pardon Money",
              light: true,
              icon: "42637",
              ae_attr: "-18% Cast Delay",
              note: 'for permanent "White Barrier"',
            },
          ],
        },
        {
          section: "Shadow",
          row: 1,
          gears: [
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
          gears: [
            {
              name: "Wicked Sunflower ★ Card",
              bold: true,
              icon_card: "24102",
              stat: "Magic AoE Dmg +1% per Off-Hand refine",
              note: 'does NOT affect "Tetra Vortex" or "Chain Lightning"',
            },
            {
              name: "Gemini's Love",
              light: true,
              icon_card: "23133",
              stat: "3% Ignore MDef",
            },
            {
              name: "Anubis ★ Card",
              light: true,
              icon_card: "24626",
              stat: "5% All Race Dmg",
            },
          ],
        },
        {
          section: "Cards (PVP)",
          row: 3,
          gears: [
            {
              name: "Thara Frog ★ Card",
              icon_card: "24048",
              stat: "3% Dmg to Demihuman, 3% Demihuman Reduc",
            },
            {
              name: "Ore Spirit Card",
              icon_card: "22044",
              stat: "Final Dmg +5% per abnormal status",
              note: "does NOT count Electrify/Alight",
            },
            {
              name: "Maya ★ Card",
              icon_card: "24606",
              stat: "20% Magic Reflect",
            },
          ],
        },
        {
          section: "Cards (PVE)",
          row: 3,
          gears: [
            {
              name: "Alice ★ Card",
              icon_card: "24634",
              stat: "15% Dmg to MVP",
            },
            {
              name: "Meryl Rowlands Card",
              icon_card: "23152",
              stat: "5% Dmg to MVP",
            },
          ],
        },
      ],
    },
    {
      slot: "Armor",
      sections: [
        {
          section: "Main",
          row: 1,
          gears: [
            {
              name: "Dreameater's Disguise",
              icon: "42155",
              ae_attr: "20% Fire/Water/Wind/Earth/Neutral Dmg",
            },
          ],
        },
        {
          section: "Shadow",
          row: 1,
          gears: [
            {
              name: "Star Shatter's Gown",
              icon: "42090",
            },
            {
              name: "Magic Light Cocoon",
              icon: "42126",
              note: "Water converting w/ Mayfly Shoes",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          gears: [
            {
              name: "Nightmare ★ Card",
              bold: true,
              icon_card: "24083",
              stat: '-3sec "White Barrier" CD',
              note: "needed for survivability",
            },
            {
              name: "Alien Nidhogg Card",
              icon_card: "23239",
              stat: "20% Ignore MDef, -25% FCT",
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
              stat: "5% MDmg, 3% MPen",
              note: "BCC Box",
            },
            {
              name: "Angeling ★ Card",
              icon_card: "24666",
              stat: "Holy armor, 5% All Race Dmg, 30% Demihuman Reduc",
            },
            {
              name: "Agav Card",
              icon_card: "24008",
              stat: "8% MAtk",
            },
          ],
        },
        {
          section: "Cards (PVP)",
          row: 3,
          gears: [
            {
              name: "Thara Frog Card",
              light: true,
              icon_card: "20024",
              stat: "30% Demihuman Reduc",
              note: "for survivability?",
            },
            {
              name: "Ghostring Card",
              light: true,
              icon_card: "22004",
              stat: "Ghost armor",
              note: "for survivability?",
            },
          ],
        },
        {
          section: "Cards (PVE)",
          row: 3,
          gears: [
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
    {
      slot: "Garment",
      sections: [
        {
          section: "Main",
          row: 1,
          gears: [
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
          gears: [
            {
              name: "Divine Feather Clothes",
              icon: "43063",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          gears: [
            {
              name: "Zanubia Card",
              bold: true,
              icon_card: "23063",
              stat: "6% Skill Dmg +0.1% per 12 Str/Dex/Int",
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
        },
        {
          section: "Cards (PVP)",
          row: 3,
          gears: [
            {
              name: "Devil Squid Card",
              icon_card: "23058",
              stat: 'Learn "Stealth" (+10% MDmg when hiding)',
              note: "only useful with Moonlight Flower ★ Card",
            },
            {
              name: "Jakk Card",
              icon_card: "22012",
              stat: "30% Fire Reduc (+20% w/ depo)",
              note: "for survivability",
            },
          ],
        },
        {
          section: "Cards (PVE)",
          row: 3,
          gears: [
            {
              name: "Mayfair Linse Card",
              icon_card: "23154",
              stat: "5% Dmg to MVP",
            },
          ],
        },
      ],
    },
    {
      slot: "Shoes",
      sections: [
        {
          section: "Main",
          row: 1,
          gears: [
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
            {
              name: "Shackles",
              icon: "43571",
              note: 'PVP: Bleed proc to trigger "Status Vulnerability" passive +25% Dmg',
            },
          ],
        },
        {
          section: "Shadow",
          row: 1,
          gears: [
            {
              name: "White Gem Boots",
              icon: "43581",
            },
            {
              name: "Saint Mary's Cloth Shoes",
              icon: "43580",
            },
            {
              name: "Mayfly Shoes",
              icon: "43587",
              note: "Water converting w/ Magic Light Cocoon",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          gears: [
            {
              name: "Dark Lord ★ Card",
              bold: true,
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
              name: "Familiar ★ Card",
              light: true,
              icon_card: "24071",
              stat: "3% MAtk",
            },
            {
              name: "Flute Player ★ Card",
              light: true,
              icon_card: "24644",
              stat: "5 Agi, 15% Move Speed +15% under abnormal status",
              note: "AM is too slow",
            },
            { br: true },
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
              stat: "5% MPen, Uninterruptible Cast",
              note: "in your dreams",
            },
          ],
        },
        {
          section: "Cards (PVP)",
          row: 3,
          gears: [
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
    {
      slot: "Accessories",
      sections: [
        {
          section: "Main",
          row: 1,
          gears: [
            {
              name: "Floral Hair Clip",
              bold: true,
              icon: "44109",
              ae_attr: "15% MAtk",
            },
            {
              name: "Guide's Brooch",
              bold: true,
              icon: "44121",
              ae_attr: "9% MPen",
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
          gears: [
            {
              name: "Tibbers' Hand",
              icon: "44049",
            },
            {
              name: "Kraken's Eye",
              icon: "44051",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          gears: [
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
        },
        {
          section: "Cards (PVP)",
          row: 3,
          gears: [
            {
              name: "Horong ★ Card",
              bold: true,
              icon_card: "24100",
              stat: '"Sight" range increased by 3 meters',
            },
            {
              name: "Wraith ★ Card",
              icon_card: "24085",
              stat: "25% Stun/Freeze chance and duration",
              note: 'for "Chain Lightning"',
            },
          ],
        },
        {
          section: "Cards (PVE)",
          row: 3,
          gears: [
            {
              name: "Ultraman Card",
              icon_card: "23114",
              stat: "8% Dmg to Brute/Demon",
            },
          ],
        },
      ],
    },
    {
      slot: "Headgear",
      sections: [
        {
          section: "",
          row: 1,
          gears: [
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
            {
              name: "+X Saint Token",
              icon: "149627",
              stat: "2% Skill Dmg +1% per refine",
              note: "F2P",
            },
          ],
        },
        {
          section: "PVP",
          row: 2,
          gears: [
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
          row: 2,
          gears: [
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
            {
              name: "Poring Sleeping Hat",
              icon: "3007221",
              stat: "Anti-fatal every 90sec",
              note: "May 2023 Blue Gacha",
            },
          ],
        },
        {
          section: "Cards",
          row: 3,
          gears: [
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
        },
        {
          section: "Cards (PVP)",
          row: 4,
          gears: [
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
          section: "Cards (PVE)",
          row: 4,
          gears: [
            {
              name: "Norman Card",
              icon_card: "23155",
              stat: "5% Dmg to MVP",
            },
          ],
        },
      ],
    },
    {
      slot: "Face",
      sections: [
        {
          section: "",
          row: 1,
          gears: [
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
            { br: true },
            {
              name: "+X Epic Spirit-Lightning",
              icon: "48598",
              stat: "10% Wind Dmg +1% per refine",
              note: "F2P",
            },
            {
              name: "+X Monocle",
              light: true,
              icon: "48525",
              stat: "5% MAtk +1% per refine",
              note: "F2P",
            },
          ],
        },
        {
          section: "PVP",
          row: 2,
          gears: [
            {
              name: "Goblin Leader Mask",
              icon: "48517",
              stat: "30% Demihuman Reduc",
              note: "F2P",
            },
          ],
        },
        {
          section: "PVE",
          row: 2,
          gears: [
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
    {
      slot: "Mouth",
      sections: [
        {
          section: "",
          row: 1,
          gears: [
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
        },
        {
          section: "PVE",
          row: 2,
          gears: [
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
    {
      slot: "Back",
      sections: [
        {
          section: "",
          row: 1,
          gears: [
            {
              name: "+6 Encomiast's Movement",
              bold: true,
              icon: "3004622",
              stat: "20% Spell Crit",
              note: "Sep 2021 Blue Gacha",
            },
            {
              name: "Starlight Sweety",
              icon: "3000321",
              stat: "5% All Race Dmg, Sleep proc",
              note: "F2P",
            },
            {
              name: "Rathgricy - Fallen Feather",
              icon: "47180",
              stat: '5% MPen, 5% Move Speed, 10% "Lex Aeterna" proc on skills',
              note: "F2P",
            },
            { br: true },
            {
              name: "Love Goddess",
              icon: "47056",
              stat: "10% Final Dmg",
              note: "Time Wish & BCC Box",
            },
            {
              name: "Fate Wheel",
              icon: "3003281",
              stat: "-10% Skill CD",
              note: 'Mar 2021 Blue Gacha, for permanent "White Barrier"',
            },
          ],
        },
        {
          section: "PVE",
          row: 2,
          gears: [
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
    {
      slot: "Tail",
      sections: [
        {
          section: "",
          row: 1,
          gears: [
            {
              name: "Beautiful Ensemble",
              icon: "3004620",
              stat: "8% Skill Dmg",
              note: "Sep 2021 Blue Gacha",
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
            {
              name: "+6 Earl Daemon",
              icon: "3005192",
              stat: "4% Magic AoE Dmg, 4% Fire/Water/Wind/Earth/Neutral Dmg",
              note: "Oct 2019 Blue Gacha",
            },
            { br: true },
            {
              name: "Sea Soul's Tail",
              icon: "48086",
              stat: "4% Fire/Water/Wind/Earth Dmg",
              note: "F2P",
            },
            {
              name: "+10 White Snake Chime",
              icon: "48087",
              stat: "3% MPen, 4% Ignore MDef",
              note: "F2P",
            },
            {
              name: "+X Tahnee's Banana Boat",
              icon: "48130",
              stat: "Skill Dmg +0.5% per refine",
              note: "F2P",
            },
          ],
        },
        {
          section: "PVE",
          row: 2,
          gears: [
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
};