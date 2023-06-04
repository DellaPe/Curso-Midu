import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const user = [
  { name: 'Pedro Dellatorre', nameUser: '@PeDe', isFollowing: false },
  { name: 'Midu Dev', nameUser: 'midudev', isFollowing: true },
  { name: 'Pablo H.', nameUser: 'pheralb', isFollowing: true }
]

const App = () => {
  const alguien = { nameUser: 'alguien', isFollowing: false } // Pasar toda las props de una es mala practica
  return (
    <div className='App'>
      {
        user.map(({ name, nameUser, isFollowing }) => (
          <TwitterFollowCard
            key={nameUser}
            nameUser={nameUser}
            inicialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
        )
      }
      <TwitterFollowCard {...alguien}>
        Alguien
      </TwitterFollowCard>
    </div>
  )
}

export default App
