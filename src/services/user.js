let user = {
    id:'1',
    first_name:'Aditya',
    last_name:'Pimpalkar',
    phone:"9757135624",
    image:'',
    email_address:'adipimpalkar14@gmail.com',
    cart:[
        {
            "productId": "3",
            "selectedItems": 2
        },
        {
            "productId": "2",
            "selectedItems": 3
        },
        {
            "productId": "5",
            "selectedItems": 4
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
        cards:[
            {
                cvc:"234",
                expiry:"01/23",
                name:"XYZ",
                number:"2345678901234567"
            },
        ]
    }
}

export default user;


export function getUserDetails() {
    return user;
}

export function saveUser(userobj) {
    user.first_name = userobj.first_name;
    user.last_name = userobj.last_name;
    user.email_address = userobj.email_address
    return { first_name: user.first_name,last_name: user.last_name, email_address:user.email_address }
}