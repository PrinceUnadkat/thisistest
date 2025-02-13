async function fetchData() {
    const url = `https://api.example.com/data?key=${API_KEY}`;
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        document.getElementById("output").innerText = JSON.stringify(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
