import axios from "axios"



export const getData = async() => {
    
    const baseURL= 'https://rickandmortyapi.com/api';

    const {data} = await axios.get(`${baseURL}/character`)

    const characters = data.results;

    // const resp = characters.map(({id, name}) =>{
    //     return{
    //         id,
    //         name,
    //         origin
    //     }

    // })

    return{
        characters
    }

}


// const transformToCharacter = (characters) => {
    
//     const charactersArr = characters.map(character =>{
//         const charArr = characters.url.split('/');
//         const id = charArr[5];
//         const image = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;
    
//           return{
//             id,
//             image,
//             name: character.name,
//             status: character.status,
//             species: character.species,
//             origin: character.origin.name
            
//           }
//       })
    
//       return charactersArr;
// }

