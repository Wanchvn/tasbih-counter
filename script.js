// Increase the Subhanallah counter by 1 when its button is clicked
function subhanallah(){
    let button = document.getElementById("subhanallah");
    let count = Number(button.innerText) || 0; // parse the current counter text, default to 0
    button.innerText = count + 1;
}

// Increase the Alhamdulillah counter by 1 when its button is clicked
function alhamdulillah(){
    let button = document.getElementById("alhamdulillah");
    let count = Number(button.innerText) || 0; // parse the current counter text, default to 0
    button.innerText = count + 1;
}

// Increase the Allahu Akbar counter by 1 when its button is clicked
function allahuakbar(){
    let button = document.getElementById("allahuakbar");
    let count = Number(button.innerText) || 0; // parse the current counter text, default to 0
    button.innerText = count + 1;
}

// Reset all counters to 0 when the reset button is clicked
function resetCounters(){
    document.getElementById("subhanallah").innerText = "0"; 
    document.getElementById("alhamdulillah").innerText = "0";
    document.getElementById("allahuakbar").innerText = "0";
}