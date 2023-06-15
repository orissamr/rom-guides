const DATA = {
  title: "DPS Soul Binder",
  title_icon: "icon_18_5",
  title_class: "sb",
  tagline: 'This PVE build pumps "Esma" Ghost damage against Large MVPs.',
  slots: [
    {
      slot: "Weapon",
      sections: [
        {
          section: "",
          row: 1,
          gears: [
            {
              name: "Devourer of Souls",
              icon: "64201",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          gears: [
            {
              name: "Drake ★ Card",
              bold: true,
              icon_card: "24603",
              stat: "30% Dmg to Large (+5% w/ depo)",
            },
            {
              name: "Minorous ★ Card",
              bold: true,
              icon_card: "24111",
              stat: "25% Dmg to Large, 5% Dmg to MVP",
            },
            {
              name: "Channeller Card",
              icon_card: "23265",
              stat: "15% Final Dmg to Large, 5% Dmg to MVP",
              note: "BCC Box",
            },
            {
              name: "Shell Chepet ★ Card",
              icon_card: "24113",
              stat: "17.5% Spell Crit, 5 Int/Luk",
            },
            { br: true },
            {
              name: "Abysmal Knight ★ Card",
              icon_card: "24117",
              stat: "15% Dmg to MVP (+5% w/ depo)",
            },
            {
              name: "Incantation Samurai Card",
              icon_card: "23055",
              stat: "15% MPen",
            },
            {
              name: "Fire Bird Chiri ★ Card",
              icon_card: "24668",
              stat: "45% Ignore MDef vs. MVP (+5% w/ depo)",
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
              name: "Alice ★ Card",
              bold: true,
              icon_card: "24634",
              stat: "15% Dmg to MVP",
            },
            {
              name: "Late King's Chess Knights Card",
              icon_card: "23282",
              stat: "20% Dmg to Large",
            },
            {
              name: "Meryl Rowlands Card",
              icon_card: "23152",
              stat: "5% Dmg to MVP",
            },
            { br: true },
            {
              name: "Anubis ★ Card",
              light: true,
              icon_card: "24626",
              stat: "5% All Race Dmg",
            },
            {
              name: "Gemini's Love",
              light: true,
              icon_card: "23133",
              stat: "3% Ignore MDef",
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
              name: "Soul Guide's Leather Shirt",
              bold: true,
              icon: "42161",
              ae_attr: "24% MAtk",
            },
            {
              name: "Horrorbones Battlegear",
              bold: true,
              icon: "42146",
              ae_attr: "20% Dmg to Large",
            },
            {
              name: "Devil's Battlesuit",
              icon: "42158",
              ae_attr: "15% MPen",
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
          ],
        },
        {
          section: "Cards",
          row: 2,
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
            {
              name: "Ghostring Card",
              icon_card: "22004",
              stat: "Ghost armor",
              note: "for survivability in most content",
            },
            { br: true },
            {
              name: "Sorcerer Card",
              light: true,
              icon_card: "23186",
              stat: "5% MDmg",
              note: "BCC Box",
            },
            {
              name: "Angeling ★ Card",
              light: true,
              icon_card: "24666",
              stat: "Holy armor, 5% All Race Dmg",
            },
            {
              name: "Agav Card",
              light: true,
              icon_card: "24008",
              stat: "5% MAtk",
            },
            {
              name: "Argiope Card",
              light: true,
              icon_card: "20034",
              stat: "Poison armor",
              note: "for survivability in some content",
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
              name: "Mayfair Linse Card",
              icon_card: "23154",
              stat: "5% Dmg to MVP",
            },
            {
              name: "Harpy ★ Card",
              icon_card: "24099",
              stat: "MAtk +0.1% per 6 Int",
            },
            { br: true },
            {
              name: "Mastering ★ Card",
              icon_card: "24614",
              stat: "10 Luk",
            },
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
          ],
        },
        {
          section: "Cards",
          row: 2,
          gears: [
            {
              name: "Marionette ★ Card",
              bold: true,
              icon_card: "24069",
              stat: "5% Ghost Dmg",
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
              name: "Dark Lord ★ Card",
              light: true,
              icon_card: "24642",
              stat: '20% "Meteor Storm" proc on hit, 25% abnormal status res',
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
              icon: "44121",
              ae_attr: "9% MPen",
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
              name: "Ultraman Card",
              icon_card: "23114",
              stat: "8% Dmg to Brute/Demon",
            },
            {
              name: "Fire Witch ★ Card",
              icon_card: "24623",
              stat: "8% Ignore MDef",
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
              name: "Music of Soul",
              bold: true,
              icon: "3007190",
              stat: "25% Final Dmg to Large",
              note: "Feb 2023 Blue Gacha",
            },
            {
              name: 'Wheel of Fortune - Four-leaf Clover ("Koi")',
              bold: true,
              icon: "149065",
              stat: "20% Spell Crit",
              note: "Time Wish",
            },
            {
              name: "Duchess of Bat",
              icon: "3006680",
              stat: "10% Ghost Dmg, 10% Final Dmg to weak element",
              note: "Nov 2022 Blue Gacha",
            },
            {
              name: "+6 Abyssal Cry",
              icon: "3001320",
              stat: "10% Dmg to Large, 5% Dmg to MVP",
              note: "Feb 2020 Blue Gacha",
            },
            { br: true },
            {
              name: "+6 Bashful Moment",
              icon: "3003390",
              stat: "15% Dmg to MVP",
              note: "May 2021 Blue Gacha",
            },
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
            {
              name: "+X Evil Hat",
              icon: "149200",
              stat: "5% Ghost Dmg +1% per refine",
              note: "F2P",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          gears: [
            {
              name: "Soul Anthem ★ Card",
              bold: true,
              icon_card: "24120",
              stat: 'Esma spammable during "Spiritual Vision"',
            },
            {
              name: "Soul Player Card",
              icon_card: "23057",
              stat: "15% Ghost Dmg",
            },
            {
              name: "Walter Card",
              icon_card: "23067",
              stat: "5% Skill Dmg, 5% Final Dmg to >50% HP targets (all targets w/ depo)",
            },
            { br: true },
            {
              name: "Katerina Card",
              icon_card: "23040",
              stat: "8% MPen",
            },
            {
              name: "Sealed Apocalypse Card",
              icon_card: "24002",
              stat: "10% Ignore MDef",
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
              name: "+6 Cute Blower",
              icon: "3006940",
              stat: "15% Dmg to MVP",
              note: "Dec 2022 Blue Gacha",
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
              name: "Huge Bounty",
              icon: "3004862",
              stat: "10% Dmg to MVP",
              note: "Nov 2021 Blue Gacha",
            },
            {
              name: "Eternal Kingship",
              icon: "48771",
              stat: "8% Dmg to MVP",
              note: "F2P Kafra Adventure Log",
            },
            {
              name: "Golden Shower near the Mouth",
              icon: "3007893",
              stat: "30 Luk, 15 Vit",
              note: "Apr 2023 BCC Box",
            },
            { br: true },
            {
              name: "Honey Bunny",
              icon: "3007180",
              stat: "5% Skill Dmg (+3% at full HP)",
              note: "Jan 2023 Blue Gacha",
            },
            {
              name: "Light Food",
              icon: "3003060",
              stat: "5% Skill Dmg",
              note: "Jan 2021 Blue Gacha",
            },
            {
              name: "+6 Magic Feather Pen",
              icon: "3005801",
              stat: "13% Ignore MDef",
              note: "May 2022 Blue Gacha",
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
              name: "+6 Goodwill Giftbox",
              icon: "47107",
              stat: "15% Dmg to MVP",
              note: "Time Wish",
            },
            {
              name: "+10 Lost Oracle Bone",
              icon: "47326",
              stat: "15% Dmg to Large",
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
              name: "Rathgricy - Fallen Feather",
              light: true,
              icon: "47180",
              stat: '5% MPen, 5% Move Speed, 10% "Lex Aeterna" proc on skills',
              note: "F2P",
            },
            {
              name: "Dark Moon Shine",
              light: true,
              icon: "3033307",
              stat: "8% Dmg to MVP",
              note: "F2P",
            },
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
              name: "Rock Bunny",
              icon: "3005690",
              stat: "10% Dmg to MVP",
              note: "Apr 2022 Blue Gacha",
            },
            {
              name: "Peter Wendy",
              icon: "3001460",
              stat: "3% MPen +15% MPen for 5sec every 20sec",
              note: "Apr 2020 Blue Gacha",
            },
            { br: true },
            {
              name: "+X Summer Banana Split",
              icon: "48080",
              stat: "3% Dmg to MVP +0.5% per refine",
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
      ],
    },
  ],
};
