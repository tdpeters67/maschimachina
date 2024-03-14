export const galleryConfig = [
  {
    id: 1,
    name: "iMaschinations",
    slug: 'imaschinations',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    assetPath: '/assets/gallery/1/',
    assets: [{id: 'iMaschination', alt: "alt_text"}]
  },
  {
    id: 2,
    name: "The World Awake",
    slug: 'theworldawake',
    description:
      "All four mountings reflect modern architecture, evidenced in calibrated contours, defined edges, and understated ornament. To breathe life into the muted surfaces and pointed construction, I selected contrasting, verdant stones and pearls. These precious materials offer associations of prosperity and protection, with hues emphasizing the new.",
    assetPath: '/assets/gallery/2',
    assets: [
      {
        id: 'IMG_8288',
        alt: 'alt_text'
      },{
        id: 'IMG_8376',
        alt: 'alt_text'
      },{
        id: 'IMG_8384',
        alt: 'alt_text'
      },{
        id: 'IMG_8450',
        alt: 'alt_text'
      },{
        id: 'IMG_8591',
        alt: 'alt_text'
      },{
        id: 'IMG_8610',
        alt: 'alt_text'
      },
    ]
  },
  {
    id: 3,
    name: "One Time Only",
    slug: 'onetimeonly',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    assetPath: '/assets/gallery/3',
    assets: [{id: 'OneTimeOnly', alt: "alt_text"}]
  },
  {
    id: 4,
    name: "Customs",
    slug: 'customs',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    assetPath: '/assets/gallery/4',
    assets: []
  },
];

export const getGalleryConfig = id => galleryConfig.find(gC => gC.id === id)