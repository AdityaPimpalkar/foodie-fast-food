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
        cards:[
            {
                cvv:"234",
                expiry:"01/23",
                name:"XYZ",
                number:"2345678901234567"
            },
        ]
    }
}

export default user;

// {payments.cards.length > 0 ?

//     payments.cards.map((card,index) => (
//     <div className="row mb-2 text-left" key={index}>
//         <div className="col-sm-1 text-center align-self-center">
        
//         {selectedpayment === card ?
//         <button className="btn btn-success"> <i className="fa fa-check"></i></button>
//         :
//         <button className="btn btn-light" onClick={() => this.choosePayment(card)}><i className="fa fa-check"></i></button>
//         }
//         </div>
//         <div className="col-sm-7 font-weight-bold font-italic">
//             <div>{card.number}</div>
//             <small>{card.expiry}</small>
//         </div>
//         <div className="col-sm-3">
//             {isdelete ? <button className="btn btn-danger float-right" ><i className="fa fa-trash"></i></button>:null}
//             <button className="btn btn-primary float-right mr-2" ><i className="fa fa-pencil"></i></button>
//             {/* onClick={() => handleEdit(card)} */}
//         </div>
//     </div>
//     ))
//     :
//     <h6 className="col-sm-12 text-center align-self-center">No saved cards</h6>
    
//     }