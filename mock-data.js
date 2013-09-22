// Static Data
var talent = [
    {
        id: 0, // Mongo ID
        name: 'Tom Cruise', // Display Name
        slug: 'tom-cruise', // Slug
        birthdate: '1962-07', // Real birthday yyyy-mm
        sex: 'male',
        startAgeRange: [ 21, 26 ], // Min/Max age of first film
        attributes: { // 0-5
            looks: 5,
            humor: 2,
            brawn: 3,
            range: 2,
            quirk: 0,
            stability: 2
        }
    }
];

var films = [
    {
        id: 0, // Mongo ID
        name: 'Top Gun', // Display Name
        slug: 'top-gun', // Slug
        penDate: '1984-05', // date script becomes available
        startPrice: 500000,
        productionCost: 8000000, // production cost minus cost of talent?
        productionTime: 12, // production cost in months
        grossRange: [10000000, 200000000], // Min/Max of potential gross  
        genres: [], // Action, Comedy, Drama, Horror, Romance, Indie
        cast: [
            {
                lead: true,
                sex: 'male',
                ageRange: [20, 30]
            },
            {
                lead: false,
                sex: 'male',
                ageRange: [20, 30]
            },
            {
                lead: false,
                sex: 'male',
                ageRange: [35, 50]
            },
            {
                lead: false,
                sex: 'female',
                ageRange: [20, 30]
            }
        ],
        sequal: 1, // Mongo ID
    }
];

var games = [
    {
        id: 0, // Mongo ID
        name: 'Tensil Town Game', // Display Name
        startDate: '2013-09-20', // Actual Start date
        gameDate: '1980-01', // Game is currently January 1980
        studios: [
            {
                name: 'Chase Studios',
                producer: 'Chase McClure',
                bankroll: 35000000
            }
        ],
        films: [
            {
                id: 0,
                status: 'unavailable'
            },
            {
                id: 0,
                status: 'available',
                bids: [
                    {
                        studio: 0,
                        amount: 1000000
                    }
                ]
            }
            {
                id: 0,
                status: 'purchased',
                studio: 0,
                purchasePrice: 2000000
            }
            {
                id: 0,
                status: 'in_production',
                studio: 0,
                purchasePrice: 2000000,
                startDate: '1980-01',
                cast: [0,1,2,3]
            }
            {
                id: 0,
                status: 'produced',
                studio: 0,
                purchasePrice: 2000000,
                startDate: '1980-01',
                cast: [0,1,2,3],
                releaseDate: '1980-01'
            },
            {
                id: 0,
                status: 'released',
                studio: 0,
                purchasePrice: 2000000,
                startDate: '1980-01',
                cast: [0,1,2,3],
                releaseDate: '1980-01',
                grossed: 10000000
            }
        ],
        talent: [
            {
                id: 0,
                status: 'available',
                starPower: 0,
                bids: [
                    {
                        studio: 0,
                        amount: 500000
                    }
                ]
            },
            {
                id: 0,
                status: 'contracted',
                starPower: 0,
                studio: 0,
                contractDate: '1980-01'
            },
            {
                id: 0,
                status: 'working',
                starPower: 0,
                studio: 0,
                film: 0
            },
            {
                id: 0,
                status: 'deceased',
                cause: 'old_age'
            }
        ],
        news: {

        }
    }
];