const DATA = {
  title: "Magic Begetter (Gear Swap)",
  title_icon: "icon_13_5",
  title_class: "bg",
  video: "https://www.youtube.com/watch?v=sxeWmFBCusI",
  tagline:
    'This magic build maximizes Homunculus MAtk before casting "Life Psychic" and swapping to a different gear set.',
  categories: [
    {
      category: "Weapon",
      sections: [
        {
          section: "Gears",
          row: 1,
          entries: [
            {
              name: "+10 War Axe of Destruction",
              icon: "41871",
              stat: "7% MAtk",
            },
            {
              name: "Staff of Wing",
              light: true,
              icon: "41544",
              stat: "9 Int",
            },
          ],
        },
        {
          section: "Cards",
          row: 1,
          entries: [
            {
              name: "Familiar Card",
              icon_card: "20007",
              stat: "2 Int, 100 MAtk",
            },
          ],
        },
      ],
    },
    {
      category: "Off-Hand",
      sections: [
        {
          section: "Gears",
          row: 1,
          entries: [
            {
              name: "+15 Mysterious Transcript",
              bold: true,
              icon: "42667",
              stat: "16% MAtk",
              ae_attr: "30% MAtk",
            },
            {
              name: "+15 Peak Platter",
              icon: "42585",
              stat: "20% MAtk",
            },
            {
              name: "+15 Othershore Web",
              icon: "42640",
              stat: "16% MAtk, 200 MAtk",
            },
          ],
        },
        {
          section: "Cards",
          row: 1,
          entries: [
            {
              name: "Celebration Night Card",
              icon: "23194",
              stat: "5 Int, 50 MAtk",
              note: "Newbie BCC Box",
            },
          ],
        },
      ],
    },
    {
      category: "Armor",
      sections: [
        {
          section: "Gears",
          row: 1,
          entries: [
            {
              name: "+15 Soul Guide's Leather Shirt",
              bold: true,
              icon: "42161",
              stat: "900 MAtk",
              ae_attr: "24% MAtk",
            },
            {
              name: "+15 Star Shatter's Gown",
              icon: "42090",
              stat: "15% MAtk",
            },
          ],
        },
        {
          section: "Cards",
          row: 1,
          entries: [
            {
              name: "Dark Swordsman Card",
              bold: true,
              icon_card: "20140",
              stat: "Int +1 per 10 Str",
              note: "optionally allocate full Str",
            },
            {
              name: "Agav Card",
              icon_card: "24008",
              stat: "5% MAtk",
            },
          ],
        },
      ],
    },
    {
      category: "Garment",
      sections: [
        {
          section: "Gears",
          row: 1,
          entries: [
            {
              name: "+12 Divine Feather Clothes",
              icon: "43063",
              stat: "3% MAtk",
            },
          ],
        },
        {
          section: "Cards",
          row: 1,
          entries: [
            {
              name: "Harpy ★ Card",
              icon_card: "24099",
              stat: "MAtk +0.1% per 6 Int",
            },
          ],
        },
      ],
    },
    {
      category: "Shoes",
      sections: [
        {
          section: "Gears",
          row: 1,
          entries: [
            {
              name: "+15 White Gem Boots",
              icon: "43581",
              stat: "18% MAtk",
            },
            {
              name: "+15 Saint Mary's Cloth Shoes",
              icon: "43580",
              stat: "16% MAtk",
            },
            {
              name: "+15 Orderly Ankle Boots",
              icon: "43617",
              stat: "12% MAtk",
            },
          ],
        },
        {
          section: "Cards",
          row: 1,
          entries: [
            {
              name: "Familiar ★ Card",
              icon_card: "24071",
              stat: "3% MAtk, 20 MAtk",
            },
          ],
        },
      ],
    },
    {
      category: "Accessories",
      sections: [
        {
          section: "Gears",
          row: 1,
          entries: [
            {
              name: "+15 Floral Hair Clip",
              icon: "44109",
              stat: "15% MAtk",
              ae_attr: "15% MAtk",
            },
          ],
        },
        {
          section: "Cards",
          row: 1,
          entries: [
            {
              name: "Zipper Bear ★ Card",
              icon: "24042",
              stat: "3% MAtk",
            },
          ],
        },
      ],
    },
    {
      category: "Headgear",
      sections: [
        {
          section: "Gears",
          row: 1,
          entries: [
            {
              name: "A Date With Blue Velvet",
              bold: true,
              icon: "3005502",
              stat: "17% MAtk",
              note: "Mar 2022 Blue Gacha",
            },
            {
              name: "Novice Night Cap",
              icon: "149179",
              stat: "6% MAtk, 2 Int",
              note: "P2W Kafra Adventure Log",
            },
            {
              name: "Lunar Clip",
              icon: "145845",
              stat: "5% MAtk",
              note: "F2P",
            },
          ],
        },
        {
          section: "Cards",
          row: 1,
          entries: [
            {
              name: "Whitebait Lake Lord Card",
              bold: true,
              icon_card: "22037",
              stat: "5% MAtk",
            },
            {
              name: "Mimmy Monster Card",
              icon_card: "20180",
              stat: "5 Int",
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
              name: "Sticky Note Nyaa",
              bold: true,
              icon: "3007211",
              stat: "17% MAtk",
              note: "Apr 2023 Blue Gacha",
            },
            { br: true },
            {
              name: "+X Monocle",
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
              name: "Honey Jar Elf",
              bold: true,
              icon: "3006605",
              stat: "8% MAtk",
              note: "Aug 2022 Feast Gacha",
            },
            {
              name: "Sound of Music",
              icon: "3004765",
              stat: "6% MAtk, 3 Int",
              note: "Sep 2021 Feast Gacha",
            },
            { br: true },
            {
              name: "Graceful Gentleman Beard",
              icon: "48699",
              stat: "4% MAtk, 20 MAtk",
              note: "P2W Kafra Adventure Log",
            },
            {
              name: "Abyss Whisper",
              icon: "48715",
              stat: "3% MAtk",
              note: "F2P",
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
              name: "Whose cheese is that",
              bold: true,
              icon: "3006032",
              stat: "17% MAtk",
              note: "Jul 2022 Blue Gacha",
            },
            {
              name: "The Ancient One's Staff",
              icon: "3002084",
              stat: "8% MAtk, 10 Int",
              note: "F2P",
            },
            { br: true },
            {
              name: "+6 Bright Light",
              icon: "3000242",
              stat: "10% MAtk",
              note: "Jul 2019 Blue Gacha",
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
              name: "Happy Bird",
              bold: true,
              icon: "48019",
              stat: "3% MAtk",
              note: "BCC Box",
            },
            { br: true },
            {
              name: "Lazy Vacation",
              icon: "48079",
              stat: "2% MAtk",
              note: "F2P",
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
              name: "DPS",
              stat: "159 Int, 159 Vit, 103 Luk",
            },
            { br: true },
            {
              name: "Str Swap (Dark Swordsman Card)",
              stat: "159 Int, 159 Str, 103 Vit",
            },
          ],
        },
      ],
    },
  ],
};
