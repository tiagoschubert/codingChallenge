require('dotenv').config()
const express = require('express');
const app = express();
const port = 3001
const Axios = require('Axios')
var cors = require('cors');
const onlyten = 10
app.use(cors());
app.get('/movies', (req, res) => {
  
  var url = "https://api.themoviedb.org/3/search/movie?api_key="+process.env.api_key+"&page=1&query="+req.query.search+"&include_adult=false"
  if (req.query.search == ''){
    res.send([])
  }
  else{
  Axios.get(url)
  .then(function(response){
    const pathPoster = "https://image.tmdb.org/t/p/w500";
    var results = response.data.results.slice(0,10).map(m=>({movie_id:m.id,title:m.title,
        poster_image_url:pathPoster+m.poster_path,popularity_summary:`${m.vote_average} out of ${m.vote_count}`}))

        


    res.send(
        
        
        results
        // .slice(0,onlyten)




        // movie_id              id
        // tittle                title
        // poster_image_url      poster_path
        // popularity_summary    vote_average and vote_count
    )
    
  })}
    




})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



