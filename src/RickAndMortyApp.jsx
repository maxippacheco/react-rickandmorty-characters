import { useState } from "react";
import { getData } from "./helpers/getData";

export const RickAndMortyApp = ()=> {
  
  const [character, SetCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(0);

  const getAll = async() => {
    const {characters} = await getData();

      const data = characters.map(((character) => {


        return character;

      }))

      const filtered = data.slice(currentPage, currentPage+5);

      SetCharacters(filtered);

  }

  const nextPage = () => {
    if (currentPage === 0 ||currentPage === 5 || currentPage === 10 ) {
        setCurrentPage(currentPage + 5)

    }

  }

  const previousPage = () => {
    if (currentPage === 5 ||currentPage === 10 || currentPage === 15 ) {
      setCurrentPage(currentPage - 5)

  }

  }

  getAll();


  return (
    <div>




      <h1 className='my-2 ml-2'>Rick and Morty Characters</h1>

  
      <table className='table table-dark'>
              <thead>
                  <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>status</td>
                    <td>species</td>
                    <td>gender</td>
                    <td>Origin</td>
                    <td>Photo</td>
                  </tr>
              </thead>



            <tbody>


                {


                  character.map(({name, status, species, gender, origin, id, image}) => {
                    return (
                      <tr key={name}>
                        <td>{ id } </td>
                        <td >{name}</td>
                        <td >{status}</td>
                        <td >{species}</td>
                        <td >{gender}</td>
                        <td >{origin.name}</td>
                        <td>
                        <img src={image} alt={name} style={{borderRadius: 100, width:75, height:75}}  />


                        </td>
                    </tr>


                      
                    )
                  })
                }
  

            </tbody>

            </table>
                
              <button 
                    className='btn btn-primary'
                    onClick={previousPage}
              >Previous</button>
              
              &nbsp;

                <button 
                  className='btn btn-primary'
                  onClick={nextPage}
                >Next</button>



    </div>
  )
  }