import { useState } from "react";

const ANIMALS = ["dog", "cat", "rabbit", "bird"];
const BREEDS = ["samoyed", "eskimo", "rottweiler"]

const SearchParams = () => {
    const [location, setLocation] = useState("Lagos")
    const [animal, setAnimal] = useState("")
    const [breed, setBreed] = useState("")


    return (
        <div className="search-params">
            <form >
                <label htmlFor="location"> location</label>
                <input type="text"  id="location" onChange={e => setLocation(e.target.value)} value={location.toUpperCase()} placeholder="Location" />
                
                <label htmlFor="animal"> Animal
                <select name="animal" value="animal" id="animal" onChange={e=>setAnimal(e.target.value)} onBlur={e=>setAnimal(e.target.value)}>
                <option  />
                        {
                        ANIMALS.map(animal => (
                            <option value={animal} key={animal}>
                                  {animal}
                              </option>
                        ))      
                        }    
               
                </select>
                </label>
                <label htmlFor="breed"> Breed
                <select name="breed" value="breed" id="breed" onChange={e=>setBreed(e.target.value)} onBlur={e=>setBreed(e.target.value)}>
                        <option />
                        {
                            BREEDS.map(breed => (
                                <option value={breed} key={breed}>
                                    {breed}
                                </option>
                            ))
                        }
                </select>
                </label>
     
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default SearchParams;