if (document.getElementById('bigBox')) {

    const queryParams = new URLSearchParams(window.location.search);
    const fullName = queryParams.get('fullName');
    const phoneNumber = queryParams.get('phoneNumber');
    const numberOfTickets = queryParams.get('numOfTickets');
    const seatNumber = queryParams.get('sitNumber');
    

    console.log("Full Name from URL:", fullName); 
    const bigBox = document.getElementById('bigBox');
    if (bigBox && fullName && phoneNumber && seatNumber && numberOfTickets) {
        
        forFullN = document.createElement('p');
        forFullN.textContent = "fullname" + fullName ;

        forPhone = document.createElement('p');
        forPhone.textContent = "phone number:" + phoneNumber;

        

        forNumT = document.createElement('p');
        forNumT.textContent = "number of Tickets: " + numberOfTickets ;

        forSeatN = document.createElement('p');
        forSeatN.textContent = "seatN : " + seatNumber;

        bigBox.append(forPhone, forFullN, forNumT, forSeatN);
    
    } else {
        console.error("bigBox not found or fullName is missing"); 
    }

}