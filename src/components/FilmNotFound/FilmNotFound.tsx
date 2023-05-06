import CSS from 'csstype'

export const FilmNotFound = function ({ textError }: { textError: string }) {
  const styleDivNotFound: CSS.Properties = {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    backgroundColor: 'tomato',
    color: 'white',
  }

  let error = (
    <>
      <h3>Error!</h3>
      <p>{textError}</p>
    </>
  )

  const filmNotFound = (
    <>
      <h3>Film Not Found!</h3>
      <p>Please, try search another film :)</p>
    </>
  )

  if (textError === 'Film not found') {
    error = filmNotFound
  }

  return <div style={styleDivNotFound}>{error}</div>
}
