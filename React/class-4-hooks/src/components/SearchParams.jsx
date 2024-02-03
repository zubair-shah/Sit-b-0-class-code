import { useState, useEffect } from "react"
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const Breeds = [];

function SearchParams() {
    const [location, setLocation] = useState('');
    const [animal, setAnimal] = useState('dog');
    const [breed, setBreed] = useState('');
    const [pets, setPets] = useState([])
    // let location = "zuibar";
    console.log(location)
    console.log(animal)
    console.log(breed)
    console.log(pets)



    useEffect(() => {
        requestPets();
    }, [])

    async function requestPets() {
        const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=dog&location=us`)
        const data = await response.json()
        let actualData = data.pets;
        setPets(actualData)
        console.log('data', data.pets)
    }

    return (
        <div className="search-params">
            <form >
                <label htmlFor="location">
                    <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
                </label>

                <label htmlFor="animal">
                    <select name="animal" id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)}>
                        {
                            ANIMALS.map((item, ind) => {
                                return <option value={item}>{item}</option>
                            })
                        }


                    </select>
                </label>

                <label htmlFor="breed">
                    <select name="breed" id="breed" disabled={!Breeds.length} value={breed} onChange={(e) => setBreed(e.target.value)}>
                        {
                            Breeds.map((item, ind) => {
                                return <option value={item}>{item}</option>
                            })
                        }


                    </select>
                </label>

                <h1>{location}</h1>
                <button>submit</button>
            </form>
            <div>
                {
                    pets.map((item, ind) => {
                        console.log('item', item)
                        return (
                            <div>
                                <h1>{item.name}</h1>
                                <h2>{item.animal}</h2>
                                <h3>{item.state}</h3>
                            </div>
                        )
                    })


                }
            </div>
        </div>
    )
}

export default SearchParams