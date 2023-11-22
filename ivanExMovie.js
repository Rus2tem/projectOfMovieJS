const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотренно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы просмотрели много фильмов');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

for (let i = 0; i < 3; i++) {
    const n = prompt('Один из последних просмотренных фильмов?', ''),
        m = prompt('Насколько оцените его?(по 10 балльной шкале)', '');
    if (n != '' && m != '' && n != null && m != null && n.length < 50) {
        personalMovieDB.movies[n] = m;
        console.log('true');
    } else {
        alert('Ошибка ввода, попробуйте снова');
        i--;
    }
}
console.log(personalMovieDB);