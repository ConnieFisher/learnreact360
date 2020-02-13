export default house = {
  House: {
    roomName: 'House',
    info: `
      * 4 bedroom
      * 3 bath
      * Priced at $180,000`,
    adjacentRooms: ['LivingRoom'],
  },
  LivingRoom: {
    roomName: 'LivingRoom' ,
    info: `
      * Wrought iron front door.
      * Elegant etched glass inserts for privacy.
      * Beautiful Ceiling Fan.
      * Views Straight through to Lake Wylie.
	    * T.V. wall mount/media.
	    * Ceiling mounted speakers.
      * Hardwood Floors.`,
    img: 'LivingRoom.jpg',
    adjacentRooms: ['Kitchen', 'EdsOffice']
  },
  EdsOffice: {
    roomName: 'EdsOffice',
    info:`
      * Cozy Knook.
      * Beatiful Ceiling Fan.
      * Direct Access to Living Room.
      * Beautiful hardwood floor.`,
    img: 'EdsOffice.jpg',
    adjacentRooms: ['LivingRoom', 'Frontporch']
  },
  Kitchen: {
    roomName: 'Kitchen',
    info: `
      * Granite counter tops and backsplash (3/4 inch-thick Brazilian Giallo Fiesta).
      * Custom-made island with bookshelf.
      * Samsung stainless steel appliances.
      * Birchwood custom cabinets and pantry with elegant crown molding.
      * Stainless steel 9" extra deep double sinks with pullout faucet.
      * Under cabinet and top of cabinet LED lights.`,
    img: 'kitchen.jpg',
    adjacentRooms: ['Living_Room','Pantry']
  },
  Pantry: {
    roomName: 'Pantry',
    info: `
      * Attractive room for all Kitchen needs.
      * Custom Shelving System.
      * Modern LED light.
      * Open and spacious.
    `,
    img: 'Pantry.jpg',
    adjacentRooms: ['Backyard','Backporch','LivingRoom','Kitchen']
  },
  Backyard: {
    roomName: 'Backyard',
    info: `
      * Extra large back yard for playground or future pool.
      * Sprinkler system.
      * Beautiful fencing.
      * Mature trees:
        shade: Old oak, red maple.
        fruit: gala apple and mackintosh.
      * Entertaining and eating area for backyard barbeques.
      * Beathtaking veiws of Lake Wylie.
    `,
    img: 'Backyard.jpg',
    adjacentRooms: ['LivingRoom','Kitchen']
  },
  Master: {
    roomName: 'Master',
    info: `
    * Large bedroom, allows for sitting area.
	* Abundant casement windows with a view of the Lake.
    * High cieling.
    * Quiet ceiling fan and light fixture.
    * Plush neutral taupe carpet.`,
    img: 'Master.jpg',
    adjacentRooms: ['MasterBath','Bankpoarch']
  },
  MasterBath:  {
    roomName: 'Master_Bathroom',
    info: `
      * Doorless stepdown shower enclosure.
      * Porcelain bath tiles.
      * Seperate toilet room for privacy with storage.
      * Double extractor lighted vents.`,
    img: 'Masterbath.jpg',
    adjacentRooms: ['Master', 'MasterCloset']
  },
  MasterCloset: {
    roomName: 'MasterCloset',
    info: `
      * Spacious Walk-in Closet.
      * Ample amount of space for all your clothes.
      * Custom shoe rack under windows.
      * Seating to decide on what to wear.`,
    img: 'MasterCloset.jpg',
    adjacentRooms: ['MasterBath']
  },
  PowderRoom: {
    roomName: 'PowderRoom',
    info: `
    * 1/2 Bathroom for guests.
	  * Private Bathroom.`,
    img: 'PowderRoom.jpg',
    adjacentRooms: ['BackHall', 'Kitchen', 'Frog', 'ConniesOffice', 'Guest','Mudroom']
  },
  BackHall: {
    roomName: 'BackHall',
    info: `
      * Hallway to back of the house.
      * Linen Closet.
    `,
    img: 'BackHall.jpg',
    adjacentRooms:['ConniesOffice','PowderRoom','Guest','Mudroom','Laundry']
  },
  ConniesOffice: {
    roomName: 'ConniesOffice',
    info: `
      * Large Bedroom/Office.
      * Connected to full guest Bathroom.
      * Cloest Turned into a hideaway office.
      * Mounted TV on Wall.
      * Futon waiting for a quest.`,
    img: 'BackHall.jpg',
    adjacentRooms: ['GuestBath','BackHall']
  },
    Guest: {
    roomName: 'Guest',
    info: `
      * Large Bedroom.
      * Connected to full guest Bathroom.
      * Mounted TV on Wall.
      * Large comfortable Double Bed. `,
    img: 'Guest.jpg',
    adjacentRooms: ['GuestBath','BackHall','Guest_Closet']
  },
  GuestBath: {
    roomName: 'GuestBath',
    info: `
      * Marble vanity top with custom beveled-edge mirror.
      * Elegant sink and bath fixtures.
      * Elongated Kohler water-saver toilet.
      * Beautiful full shower/bath enclosure.`,
    img: 'GuestBath.jpg',
    adjacentRooms: ['Guest', 'BackHall']
  },
  Guest_Closet: {
    roomName: 'Guest_Closet',
    info: `
      * Perfect closet for guests.
      * Custom shelving and rod.
    `,
    img: 'Guest_Closet.jpg',
    adjacentRooms: ['Guest']
  },
  Laundry: {
    roomName: 'Laundry',
    info: `
      * Inside large washer and dryer.
      * Lighted ceiling fixture.
      * Enough room for ironing.
      * Tiled floor.`,
    img: 'Laundry.jpg',
    adjacentRooms: ['Mudroom','Mudroom_Closet','Garage']
  },
  Mudroom: {
    roomName: 'Mudroom',
    info: `
      * Seating and staging area in implement weather.
      * Storage closet.
	  * Off the Garage for conveince
`,
    img: 'Mudroom.jpg',
    adjacentRooms: ['Mudroom_Closet','Garage', 'Laundry']
  },
    Mudroom_Closet: {
    roomName: 'Mudroom',
    info: `
      * Storage for hats and coats.
      * Large storage closet.`,
    img: 'Mudroom_Closet.jpg',
    adjacentRooms: ['Mudroom','Garage', 'Laundry']
  },
  Garage: {
    roomName: 'Garage',
    info: `
      * Garage room windows for daylight convenience.
      * Double car garage with anti-slip surface floor.
	  * Conveinent door to mudroom and the entire house.`,
    img: 'garage.jpg',
    adjacentRooms: ['Laundry_Room']
  }
}
