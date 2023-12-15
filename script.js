function bookFlight() {
  
    const travellers = document.getElementById("travellers").value;
}

let travellersData = {
    'Adults': 0,
    'Students': 0,
    'Youths': 0,
    'Children': 0,
    'Toddlers in own seat':0,
    'infants on lap':0

};

function openTravellerModal() {
    updateTravellerDetails();
    document.getElementById("travellerModal").style.display = "block";
}

function closeTravellerModal() {
    updateTotalTravellers();  // Update total when closing the modal
    document.getElementById("travellerModal").style.display = "none";
}

function addTraveller(type) {
    travellersData[type]++;
    updateTravellerDetails();
}

function removeTraveller(type) {
    if (travellersData[type] > 0) {
        travellersData[type]--;
        updateTravellerDetails();
    }
}

function updateTravellerDetails() {
    const travellerDetailsContainer = document.getElementById("travellerDetails");
    travellerDetailsContainer.innerHTML = "";

    for (const type in travellersData) {
        travellerDetailsContainer.innerHTML += `
            <p>${type}: 
                <button onclick="removeTraveller('${type}')">(-)</button>
                ${travellersData[type]}
                <button onclick="addTraveller('${type}')">( +)</button>
            </p>`;
    }
    
    updateTotalTravellers();  // Update total dynamically
}

function updateTotalTravellers() {
    let totalTravellers = 0 ;
    for (const type in travellersData) {
        totalTravellers += travellersData[type];
    }
    document.getElementById("travellers").value = `${totalTravellers} travellers`;
}

// Adding event listener to the "Number of Travellers" input
document.getElementById("travellers").addEventListener("focus", openTravellerModal);