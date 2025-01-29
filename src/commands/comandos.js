import { Command } from 'commander'
import { fetchMovies } from './consultarPeliculas.js';

export let movies;


const program = new Command()

program.name('TMDB CLI Tool').description('Herramienta en la consola para consultar peliculas.').version('0.0.1')

program
  .option('--type <type>', 'Tipo de películas: playing, popular, top, upcoming', 'popular')
  .action(async (options) => {
    movies = await fetchMovies(options.type);
    movies.forEach((movie, index) => {
        console.log(`${index + 1}. ${movie.title} (${movie.release_date})`);
      });
  });

export default program