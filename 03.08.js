const KEY = "912c622485ebcccfe6e75ebb3dc2de10";

const Error = document.getElementById("Error");
const searcgField = document.getElementById("cityField");
const serchBtn = document.getElementById("cityBtn");

// By $ zadziałał trzeba dać `
const getWeather = async (guery) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${guery}&appid=${KEY}`);

  if (res.status === 200) {
    const data = await res.json();
    wetherInfo(data);
    Error.textContent = "";
  } else {

    Error.textContent = "Wystąpił błąd!".toUpperCase()
  }
};

const wetherInfo = (data) => {
  console.log(data);
  const wether = document.getElementById("wether");

  const city = document.getElementById("wetherCity");
  city.textContent = data.name;

  const temp = document.getElementById("wetherT");
  temp.textContent = convertCelsius(data.main.temp);
  

  const temp_max = document.getElementById("wetherInfo1");

  temp_max.textContent = convertCelsius(data.main.temp_max);
 

  const temp_min = document.getElementById("wetherInfo2");

  temp_min.textContent = convertCelsius(data.main.temp_min);
  

  const wind = document.getElementById("wetherInfo3");
  wind.textContent = data.wind.speed;
  
};

serchBtn.addEventListener("click", () => {
  getWeather(searcgField.value);
});

const convertCelsius = (value) => {
  return (value - 273.15).toFixed();
}
