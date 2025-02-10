if (document.getElementById('submitButton')) {
    const imageButton = document.getElementById('imageButton');
    const seatConfig = document.getElementById('seatConfig');
    const icon = imageButton.querySelector('i');
    const submitButton = document.getElementById('submitButton');

    // Initialize seatConfig display to 'none'
    seatConfig.style.display = 'none';

    imageButton.addEventListener('click', () => {
        if (seatConfig.style.display === 'none') {
            seatConfig.style.display = 'block';
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            seatConfig.style.display = 'none';
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    });

    const $ =  document.querySelector.bind(document);
    const toggleBtn = $('toggle');
    
    toggleBtn.addEventListener('click' , e => {
        if (toggleBtn.innerText =='DARK') {    
            document.documentElement.setAttribute('theme' , 'dark');
            toggleBtn.innerText = 'LIGHT';
        } else{
            document.documentElement.removeAttribute('theme');
            toggleBtn.innerText = "DARK";
        }
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const sitNumber = document.getElementById('sitNumber').value;
        const numOfTickets = document.getElementById('numOfTickets').value;
        const phoneNumber = document.getElementById('phoneNumber').value;

        // Constructing the URL with query parameters
        const url = `page2.html?fullName=${encodeURIComponent(fullName)}&sitNumber=${encodeURIComponent(sitNumber)}&numOfTickets=${encodeURIComponent(numOfTickets)}&phoneNumber=${encodeURIComponent(phoneNumber)} `;
        
        // Redirecting to the new page
        window.location.href = url;
    });
}
