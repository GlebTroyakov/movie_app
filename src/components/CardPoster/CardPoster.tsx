import './CardPoster.css'

export const CardPoster = function ({ posterPath }: { posterPath: string }): JSX.Element {
  const posterNotFound =
    'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg'
  const usrPoster = posterPath ? 'https://image.tmdb.org/t/p/original' + posterPath : posterNotFound

  return (
    <div className="card-poster">
      <img src={usrPoster} className="card-poster__image" alt="poster" />
    </div>
  )
}
