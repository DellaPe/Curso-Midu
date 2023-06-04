import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const TwitterFollowCard = ({ children, nameUser, inicialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(inicialIsFollowing)

  const srcAvatar = `https://unavatar.io/${nameUser}`
  const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-aside-button is-following' : 'tw-followCard-aside-button'

  const handerClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-header-img'
          alt='Imagen Personal'
          src={srcAvatar}
        />
        <div className='tw-followCard-header-div'>
          <strong>
            {children}
          </strong>
          <span className='tw-followCard-header-span'>
            {nameUser}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handerClick}>
          <span className='tw-followCard-aside-button-text'>{textButton}</span>
          <span className='tw-followCard-aside-button-span'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
