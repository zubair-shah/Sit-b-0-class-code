import { useState, useEffect } from "react"
import { Button, Accordion, Form } from 'react-bootstrap';
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
            {/* <form > */}
            <Form>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
                </Form.Group>


                {/* <label htmlFor="location">
                    <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
                </label> */}

                <Form.Select aria-label="Default select example" className="h-50">
                    {
                        ANIMALS.map((item, ind) => {
                            return <option value={item}>{item}</option>
                        })
                    }

                </Form.Select>

                {/* <label htmlFor="animal">
                    <select name="animal" id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)}>
                        {
                            ANIMALS.map((item, ind) => {
                                return <option value={item}>{item}</option>
                            })
                        }


                    </select>
                </label> */}

                {/* <label htmlFor="breed">
                    <select name="breed" id="breed" disabled={!Breeds.length} value={breed} onChange={(e) => setBreed(e.target.value)}>
                        {
                            Breeds.map((item, ind) => {
                                return <option value={item}>{item}</option>
                            })
                        }


                    </select>
                </label> */}


                <Form.Select aria-label="Default select example" className="h-50" name="breed" id="breed" disabled={!Breeds.length} value={breed} onChange={(e) => setBreed(e.target.value)}>
                    {
                        Breeds.map((item, ind) => {
                            return <option value={item}>{item}</option>
                        })
                    }

                </Form.Select>

                <h1>{location}</h1>
                <Button variant="danger" className="mx-auto d-flex">submit</Button>
                {/* <button>submit</button> */}
                {/* </form> */}
            </Form>
            <div>
                {/* {
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


                } */}

                {/* <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
            </div>
        </div>
    )
}

export default SearchParams