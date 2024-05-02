import React, { useEffect } from "react";
import axios from "axios";
const Fire = () => {
  //const BASE_URL = "http://localhost:7000/AnimeCharaters";
  const a =
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7b77f2dc3b987876e7b615e5cf8dec71";
  const [useLocation, setlocation] = React.useState([]);
  const [data, setdata] = React.useState("");

  useEffect(() => {
    const fetchWithPromise = async () => {
      const { data } = await axios.get(a);
      setlocation(data);
      //   const data = await response.json();
      //   setlocation(data);
    };

    fetchWithPromise();
  }, []);

  const Input = (e) => {
    setdata(e.target.value);
  };

  return (
    <>
      <div>
        <input
          placeholder="Enter the Value"
          onChange={Input}
          type="text
    "
        />
      </div>

      <div>
        <table className="table border bg-dark text-white">
          <tr>
            {useLocation.map((e) => (
              <td>{e.Name}</td>
            ))}
          </tr>
          <tr>
            {useLocation.map((e) => (
              <td>{e.Power}</td>
            ))}
          </tr>
          <tr>
            {useLocation.map((e) => (
              <td>{e.Ability}</td>
            ))}
          </tr>
        </table>
      </div>
    </>
  );
};

export default Fire;
