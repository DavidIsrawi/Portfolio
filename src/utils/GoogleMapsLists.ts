import { MapsListsCategory } from "./DataModel";

export const mapsLists: MapsListsCategory[] = [
    {
        name: 'Le Tour Series',
        description: 'A combination of experiences and food',
        mapsLists: [
            {
                title: 'Tokyo',
                url: 'https://maps.app.goo.gl/dBAgPELL1h7Z4Se88',
                isNew: true
            },
            {
                title: 'Guadalajara',
                url: 'https://maps.app.goo.gl/9jDu727VRARRCeTZ8',
                isNew: true
            },
            {
                title: 'Barcelona',
                url: 'https://goo.gl/maps/KTBSNeGfyJcoh9fa6',
                isNew: false
            },
            {
                title: 'Madrid',
                url: 'https://goo.gl/maps/ihthHBDUwjqfoa4a6',
                isNew: false
            },
            {
                title: 'Vancouver',
                url: 'https://goo.gl/maps/9Apgbv29NDYiww4m8',
                isNew: false
            },
            {
                title: 'Cabo',
                url: 'https://goo.gl/maps/gp9kGFUkm9ncQqBC6',
                isNew: false
            }
        ] 
    },
    {
        name: 'Fire Food Series',
        description: 'Best food in town',
        mapsLists: [
            {
                title: 'Portland',
                url: 'https://maps.app.goo.gl/2xt8rVWYQoJwfr7E9',
                isNew: true
            },
            {
                title: 'Orlando',
                url: 'https://goo.gl/maps/CnTN3Tg4SFxPdmdG8',
                isNew: true
            },
            {
                title: 'Seattle',
                url: 'https://goo.gl/maps/BznEZjCikxUMp4Vo9',
                isNew: false
            },
            {
                title: 'San Diego',
                url: 'https://goo.gl/maps/3f1NXBaWAfHZYBvU9',
                isNew: false
            },
            {
                title: 'Los Angeles',
                url: 'https://goo.gl/maps/WHiTsQYM777WXjRL6',
                isNew: false
            },
            {
                title: 'Whistler',
                url: 'https://goo.gl/maps/72BaMQonGLCVh6Ut8',
                isNew: false
            }
        ] 
    }
]