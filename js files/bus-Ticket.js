const AllSeat = document.querySelectorAll('.seat');
let selectedSeat = 0;
const maxSeat = 4;
const selectedSeatText = [];
const totalSeat = document.getElementById('totalSeat'); // Ensure there's an element with this ID
const UpdateSeat = document.getElementById('SeatName'); // Ensure there's an element with this ID

AllSeat.forEach(function (seat) {

    seat.addEventListener('click', function ChangedBackgroundColor() {
        if (!this.classList.contains('bg-green-400') ) {
            this.classList.remove('bg-white');
            this.classList.add('bg-green-400');
            // selectedSeat++;
            // selectedSeatText.push(this.innerText);
            totalSeat.innerText = selectedSeat;
            UpdateSeat.innerText = selectedSeatText.join('\n '); // Display the selected seat inner texts
            console.log('Selected seats:', selectedSeatText);
        }
    });

    seat.addEventListener('dblclick', function RevertBackgroundColor() {
        if (this.classList.contains('bg-green-400')) {
            this.classList.remove('bg-green-400');
            this.classList.add('bg-white');
            // selectedSeat--;
            // const index = selectedSeatText.indexOf(this.innerText);
            if (index > -1) {
                selectedSeatText.splice(index, 1);
                console.log('Selected seats:', selectedSeatText);
            }
            totalSeat.innerText = selectedSeat;
            UpdateSeat.innerText = selectedSeatText.join('\n '); // Update the displayed seat inner texts
        }
    });
});

