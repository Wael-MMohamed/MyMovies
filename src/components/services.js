export default async function getMovie (movieName) {
    try{
        const response =await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=3c10748e`);
        if(!response.ok)throw Error(response.statusText);
        const json = await response.json();
        // console.log('service : ',json);
        return json;
    }catch(e){
        console.error(e);
    }

}