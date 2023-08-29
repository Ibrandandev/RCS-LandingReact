export const obtenerDatosClima = async (lat, long) => {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a7fc87f5b94b227523a49f35835492c1`
  );
  const data = await result.json();
  return data;
};
