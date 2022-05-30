import React, {useState, useEffect} from "react"

import * as S from './Styled'
 
function Repositories() {
  const [ repositories, setRepositories ] = useState([])

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName')
    repositoriesName = JSON.parse(repositoriesName)
    setRepositories(repositoriesName)
  }, [])
  
  function handleRepoClear() {
    localStorage.clear()
  } 

  const repoWrapper = repositories.map((repository, index) => {
    return <p key={index}> Repositório: {repository} </p>
  })

  return(
    <S.Container>
      <S.Title>Respositorios</S.Title>
      {repoWrapper}
      <S.LinkHome onClick={handleRepoClear} to="/">Voltar</S.LinkHome>
    </S.Container>
  )
}

export default Repositories