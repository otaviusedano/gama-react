import React, {useState} from 'react'

import * as S from './Styled'

import { useNavigate } from 'react-router-dom'

// props = propriedade HTML, vc cria elas e as puxa usando props.EUQUERO

function Home() {
  const navigate = useNavigate()
  const [ user, setUser ] = useState('')
  const [ error, setError ] = useState(false)
  const url = `https://api.github.com/users/${user}/repos`

  function handlePesquisa() {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        const repositories = json
        const repositoriesName = []
        repositories.map((repo) => {
         return repositoriesName.push(repo.name)
        })
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
        navigate("./repositories", { replace: true })
      })
      .catch(_erro => setError(true))
  }

  return (
    // <> = fragment, serve para retornar mais que uma coisa sem usar div
    <S.Container>
      <S.Content>
        <S.Title>Pesquise o portifólio de: {user}</S.Title>
        <S.Search value={user} placeholder="Usuário" onChange={e => setUser(e.target.value)} />
        <S.BtnSearch onClick={handlePesquisa} type='button'> Pesquisar</S.BtnSearch>
      </S.Content>
      { error ? <span> Ocorreu algum erro, Tente novamente. </span> : '' }
    </S.Container>
  );
}

export default Home;
