document.addEventListener('DOMContentLoaded', () => {
    const votingForm = document.getElementById('votingForm');
    const resultOption1 = document.getElementById('resultOption1');
    const resultOption2 = document.getElementById('resultOption2');
    const resultOption3 = document.getElementById('resultOption3');

    // Initialize votes
    let votes = {
        'Option 1': 0,
        'Option 2': 0,
        'Option 3': 0
    };

    votingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Get selected vote
        const selectedVote = document.querySelector('input[name="vote"]:checked');
        if (selectedVote) {
            votes[selectedVote.value]++;
            updateResults();
        } else {
            alert('Please select an option to vote.');
        }
    });

    function updateResults() {
        resultOption1.textContent = `Option 1: ${votes['Option 1']} votes`;
        resultOption2.textContent = `Option 2: ${votes['Option 2']} votes`;
        resultOption3.textContent = `Option 3: ${votes['Option 3']} votes`;
    }
});
