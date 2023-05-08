const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const question1 = prompt('Один из последних просмотренных фильмов?', ''),
    question2 = +prompt('Насколько оцените его?(по 10 балльной шкале)', ''),
    question3 = prompt('Один из последних просмотренных фильмов?', ''),
    question4 = +prompt('Насколько оцените его?(по 10 балльной шкале)', '');

personalMovieDB.movies[question1] = question2;
personalMovieDB.movies[question3] = question4;

console.log(personalMovieDB);