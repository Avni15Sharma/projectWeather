let cityname="";
document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault();
    cityname=document.getElementById("cityName").value;
    if(cityname==""){
        alert("please enter a city name");
        return;
    }
    
        const url = 'https://cities-temperature.p.rapidapi.com/weather/v1/current?location='+ cityname;
        const options = {
	    method: 'GET',
	    headers: {
		    'x-rapidapi-key': 'ec5e6422e6msh2b6844cc2658179p15a1dajsna638840b7017',
		    'x-rapidapi-host': 'cities-temperature.p.rapidapi.com'
	        }
        };

        async function fetchData(){
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                document.getElementById("city").innerText=result.location
                document.getElementById("temperature").innerHTML=`Temperature: <small class="text-body-secondary fw-light">${result.temperature}<span>&#8451;</span></small>`
                document.getElementById("location").innerText=`Location: ${result.location}`
                document.getElementById("humidity").innerHTML=`Humidity: <small class="text-body-secondary fw-light">${result.humidity}%</small>`
                document.getElementById("wind_speed").innerHTML=`Wind speed:<small class="text-body-secondary fw-light">${result.wind_speed}km/h</small>`
                document.getElementById("wind_speed2").innerText=`Wind Speed: ${result.wind_speed}km/h`
                document.getElementById("description").innerText=`Description: ${result.description}`  
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    
})

function populate(city){
const url1 = 'https://cities-temperature.p.rapidapi.com/weather/v1/current?location='+ city;
        const options1 = {
	    method: 'GET',
	    headers: {
		    'x-rapidapi-key': 'ec5e6422e6msh2b6844cc2658179p15a1dajsna638840b7017',
		    'x-rapidapi-host': 'cities-temperature.p.rapidapi.com'
	        }
        };

        async function fetchData1(){
            try {
                const response1 = await fetch(url1, options1);
                const result1 = await response1.json();
                console.log(result1);
                document.getElementById(`${city}_t`).innerText=result1.temperature
                document.getElementById(`${city}_d`).innerText=result1.description
                document.getElementById(`${city}_h`).innerText=result1.humidity
                document.getElementById(`${city}_w`).innerText=result1.wind_speed 
            } catch (error) {
                console.error(error);
            }
        }
        fetchData1();
}
populate("shanghai")
populate("boston")
populate("toronto")
populate("bangalore")
populate("chicago")
populate("austin")

// {
// description:"mist"
// humidity: 94
// location: "Delhi"
// temperature: 15.05
// wind_speed: 4.63
// }


