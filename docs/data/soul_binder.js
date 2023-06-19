const DATA = {
  title: "DPS Soul Binder",
  title_icon: "icon_18_5",
  title_class: "sb",
  tagline: 'This PVE build pumps "Esma" Ghost damage against Large MVPs.',
  categories: [
    {
      category: "Weapon",
      sections: [
        {
          section: "",
          row: 1,
          entries: [
            {
              name: "Devourer of Souls",
              icon: "64201",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
          entries: [
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
      category: "Off-Hand",
      sections: [
        {
          section: "Main",
          row: 1,
          entries: [
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
      category: "Armor",
      sections: [
        {
          section: "Main",
          row: 1,
          entries: [
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
          entries: [
            {
              name: "Star Shatter's Gown",
              icon: "42090",
              note: "for MAtk%/MPen%",
            },
            {
              name: "The Chosen's Gown",
              icon: "42089",
              note: "for Dmg to Large",
            },
          ],
        },
        {
          section: "Cards",
          row: 2,
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
          entries: [
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
      category: "Accessories",
      sections: [
        {
          section: "Main",
          row: 1,
          entries: [
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
          entries: [
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
      category: "Headgear",
      sections: [
        {
          section: "",
          row: 1,
          entries: [
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
          entries: [
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
      category: "Mouth",
      sections: [
        {
          section: "",
          row: 1,
          entries: [
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
    {
      category: "Skills",
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
                  section: "Damage/Debuff",
                  entries: [
                    {
                      name: "Esma",
                      type: "Attack",
                      tags: ["3s CD"],
                      icon_skill: "skill_2343001",
                      stat: "High single-target damage; scales heavily on Luk, increased damage vs. Large",
                      note: 'REQUIRES ACTIVATION from other "Es-" skills!!',
                    },
                    {
                      name: "Estun",
                      type: "Attack",
                      tags: ["1.5s CD"],
                      icon_skill: "skill_2323001",
                      stat: "Low single-target damage",
                      note: 'activates "Esma"',
                    },
                    {
                      name: "Eska",
                      type: "Attack",
                      tags: ["3.5s CD"],
                      icon_skill: "skill_2344001",
                      stat: "Low AoE damage",
                      note: 'activates "Esma"',
                    },
                    { br: true },
                    {
                      name: "Eske",
                      type: "Debuff",
                      tags: ["13s", "16s CD"],
                      icon_skill: "skill_2322001",
                      stat: "-20% Dmg/MDmg Reduc",
                      note: 'activates "Esma"',
                    },
                    {
                      name: "Unreal",
                      type: "Debuff",
                      tags: ["8s", "14s CD", "0.5s FCT"],
                      icon_skill: "skill_2381001",
                      stat: "-100% MDef",
                    },
                    {
                      name: "Weight of Soul",
                      type: "Passive",
                      icon_skill: "skill_2325001",
                      stat: "Apply size modifiers to MDmg",
                      note: "can use Lv1",
                    },
                  ],
                },
              ],
            },
            {
              align: "row",
              sections: [
                {
                  section: "Offensive Souls (Debuff)",
                  entries: [
                    {
                      name: "Soul Hunter",
                      type: "Passive",
                      icon_skill: "skill_2330001",
                      stat: "+30% Final Dmg against enemies with an Offensive Soul",
                      note: "keep this active at all times!!",
                    },
                    {
                      name: "Soul of the Priest",
                      type: "Debuff",
                      tags: ["10s", "22s CD"],
                      icon_skill: "skill_2307001",
                      stat: "Lex target (2x damage) every 2s",
                    },
                    {
                      name: "Soul of the Summoner",
                      type: "Debuff",
                      tags: ["15s", "16s CD"],
                      icon_skill: "skill_2308001",
                      stat: "-20% Atk/MAtk",
                      note: 'only used to activate "Soul Hunter", can use Lv1',
                    },
                  ],
                },
                {
                  section: "Defensive Souls (Buff)",
                  entries: [
                    {
                      name: "Kaizel",
                      type: "Passive",
                      icon_skill: "skill_2345001",
                      stat: "Auto-revive players with a Defensive Soul",
                    },
                    {
                      name: "Soul of the Sage",
                      type: "Buff",
                      tags: ["5~10s", "24s CD", "0.5s FCT"],
                      icon_skill: "skill_2383001",
                      stat: "Dodge ground skills, increase magic flee, constantly clear self-debuffs",
                      note: 'self-buff, use as anti-fatal with "Kaizel"',
                    },
                    {
                      name: "Soul of the Ninja",
                      type: "Buff",
                      tags: ["35s", "18s CD", "1s FCT"],
                      icon_skill: "skill_2306001",
                      stat: "+30% MPen, -100% FCT",
                      note: "for magic classes",
                    },
                    {
                      name: "Soul of the Blacksmith",
                      type: "Buff",
                      tags: ["150s", "18s CD"],
                      icon_skill: "skill_2340001",
                      stat: "+25% Atk",
                      note: 'for physical classes, or cast it on anybody to activate "Kaizel"',
                    },
                  ],
                },
              ],
            },
            {
              align: "row",
              sections: [
                {
                  section: 'Buffs (in "Prepare for Elite")',
                  entries: [
                    {
                      name: "Warm Wind",
                      type: "Buff",
                      tags: ["600s"],
                      icon_skill: "skill_2302001",
                      stat: "Element conversion",
                      note: "always use Ghost element!!",
                    },
                    {
                      name: "Spiritual Vision",
                      type: "Buff",
                      tags: ["21s", "42s CD", "0.5s FCT"],
                      icon_skill: "skill_2341001",
                      stat: "Treat all enemies as Ghost",
                      note: "be careful about CD if adding to PFE",
                    },
                    {
                      name: "Soul Gathering",
                      type: "Buff",
                      tags: ["35s", "120s CD", "30s CD", "1.4s FCT"],
                      icon_skill: "skill_2304001",
                      stat: "+30% Ghost Dmg, +20% MDmg, +50 Luk",
                      note: "long FCT!!",
                    },
                    {
                      name: "Soul Reaping Ceremony",
                      tags: ["60s", "60s CD", "1s FCT"],
                      type: "Buff",
                      icon_skill: "skill_2324001",
                      stat: "+10% Dmg to Large, +10% Race Dmg",
                      note: "also buffs nearby teammates",
                    },
                  ],
                },
                {
                  section: "Utility",
                  entries: [
                    {
                      name: "Soul Walker",
                      type: "Buff",
                      tags: ["5s", "24s CD"],
                      icon_skill: "skill_2312001",
                      stat: '+50% Move Speed, immune to PDmg; drains all SP, triggering "Kaahi" healing',
                    },
                    {
                      name: "Kaahi",
                      type: "Passive",
                      icon_skill: "skill_2310001",
                      stat: "On SP loss, restore HP according to SP*30",
                    },
                    {
                      name: "Kaina",
                      type: "Passive",
                      icon_skill: "skill_2311001",
                      stat: 'Restore 10% HP/SP per second during "Play Dead"',
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
