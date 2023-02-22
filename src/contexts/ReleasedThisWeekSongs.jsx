import React, { createContext, useContext } from 'react'

const ReleasedThisWeekSongs= createContext()
export const useReleasedThisWeekSongs= useContext(ReleasedThisWeekSongs)

const ReleasedThisWeekProvider = ({children}) => {
    // const authParamenters=

  return (
    <ReleasedThisWeekSongs.Provider >
        {children}
    </ReleasedThisWeekSongs.Provider>
  )
}

export default ReleasedThisWeekProvider