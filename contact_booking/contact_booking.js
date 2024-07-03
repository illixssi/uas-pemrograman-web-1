document.addEventListener("DOMContentLoaded", function () {
    const hotelSelect = document.getElementById('hotel');
    const nightsInput = document.getElementById('nights');
    const totalInput = document.getElementById('total');
    const destinationTypeSelect = document.getElementById('destination-type');
    const destinationSelect = document.getElementById('destination');
    const bookingForm = document.getElementById('booking-form');

    document.getElementById('checkin').valueAsDate = new Date();

    const packageDestinations = [
        "Bali Package",
        "Yogyakarta Package",
        "Lombok Package"
    ];

    const alaCarteDestinations = [
        "Komodo Island",
        "Raja Ampat Islands",
        "Mount Bromo",
    ];

    function populateDestinations() {
        const selectedType = destinationTypeSelect.value;
        let options = selectedType === 'package' ? packageDestinations : alaCarteDestinations;
        destinationSelect.innerHTML = options.map(dest => `<option value="${dest}">${dest}</option>`).join('');
    }

    function calculateTotal() {
        const hotelPrice = parseInt(hotelSelect.value, 10);
        const nights = parseInt(nightsInput.value, 10);
        const totalPrice = hotelPrice * nights;
        totalInput.value = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    }

    function showSuccessMessage() {
        alert("Booking successful!");
        bookingForm.reset();
        document.getElementById('checkin').valueAsDate = new Date();
        calculateTotal();
        populateDestinations();
    }

    hotelSelect.addEventListener('change', calculateTotal);
    nightsInput.addEventListener('input', calculateTotal);
    destinationTypeSelect.addEventListener('change', populateDestinations);

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (bookingForm.checkValidity()) {
            showSuccessMessage();
        }
    });

    calculateTotal();
    populateDestinations();
});
