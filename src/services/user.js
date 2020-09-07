let user = {
    id:'1',
    firstName:'Aditya',
    lastName:'Pimpalkar',
    phone:"9757135624",
    img:'',
    emailId:'adipimpalkar14@gmail.com',
    cart:[
        {
            "productId": "3",
            "selectedItems": 2
        }
    ],
    addresses: [
        {
            id:"1",
            addressLine1:"B-10, Shri Kaustubh Aparatment",
            addressLine2:"Thane Station",
            landmark:"Opposite,Mangla High school,Kopri",
            city:"THANE(EAST)",
            isdefault: false
        },
        {
            id:"2",
            addressLine1:"11, Prajakta Society, Opposite Hanuman temple",
            addressLine2:"Brahman society, Hitavardhani road",
            landmark:"Hitavardhani road, Naupada",
            city:"THANE",
            isdefault: true
        }
    ],
    payments: {
        cards:{
            saved:[],
            default:""
        },
        onDelivery: true
    }
}

export default user;