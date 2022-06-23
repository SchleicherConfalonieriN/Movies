import Config from './Config.js'

const Api = { 
   
   genre: Config.url+'/genre/movie/list?api_key='+Config.key+'&language=en-US',
   search:{
      searchS: Config.url+'search/movie?api_key='+Config.key+'&language=en-US&query=',
      searchE:'&page=1&include_adult=false',
   },

   trendingweek: 'https://api.themoviedb.org/3/trending/movie/week?api_key=',
   discoverP : Config.url+'discover/movie?api_key='+Config.key+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
}
export default Api
