import { useEffect, useState } from "react";
import API_ROOT from '../utils';
// import { client } from "../client";
// import axios from "axios";

//getting information from contentful
//we use get Animal to retrieve a new simplified object and save it  line 7-17: object

// below code indicates how to fetch data from contenful api
// const getAnimal = (animal) => ({

//   id: animal.sys.id,
//   name: animal.fields.name,
//   latinName: animal.fields.latinName,
//   thumbnails: animal.fields.thumbnails?.map((thumb) => ({
//     url: thumb.fields.file.url,
//     title: thumb.fields.title,
//   })),
//   //crop: animal.fields?.fields.file.url + "?w=300&h=200&fit=crop",
//   img: animal.fields.image?.fields.file.url + "?w=400&h=300&fit=fill",
// });


//hook created to include list of animals from API
function useAnimals() {
  //animals=current state, setAnimals=state setter
  const [animals, setAnimals] = useState([]); //we define useState and start with empty array

  //useEffect executes something at the end of the whole execution in React
  //useEffect = actions are exectued after the DOM is loaded (at the end)
  //fetch can have a lot of data, we need client.getEntries otherwise website won´t be shown
  //with client.getEntries we can have loading state
  // useEffect(() => {
  //   client
  //     .getEntries()
  //     //if the server replies
  //     //response is a variable, depends on map function
  //     .then((response) => {
  //       console.log(response);
  //       console.log(JSON.stringify(response));
  //       const newAnimals = response.items.map((item) => getAnimal(item));
  //       console.log(JSON.stringify(newAnimals));
  //       setAnimals(newAnimals); //-> actions after answer, asynchronous callback
  //     })
  //     .catch((error) => console.log("Request failed: " + error));
  //   //.catch -> in order to control error -> browser will display "Request failed" if promise is not fulfilled, but rejected
  // }, []);

  useEffect(() => {
    fetch(`${API_ROOT}animals`)
      .then((response) => response.json())
      .then((json) => {
        
        setAnimals(json.data);
        console.log(json);
      })
      .catch(() => console.log("Request failed"));
  }, []);
  return animals;
}

export default useAnimals;
