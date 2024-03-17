import { useEffect } from "react"
import { useUser } from "./useUser"
import { useLocalStorage } from "./useLocalStorage"

export const useAuth = () => {
  // we can re export the user methods or object from this hook
  const { user, addUser, removeUser, setUser } = useUser()
  const { getItem } = useLocalStorage()

  // useEffect(() => {
  //   const user = getItem("user")
  //   if (user) {
  //     addUser(user)
  //   }
  // }, [addUser, getItem])

  const login = user => {
    console.log("----useAuth:   "+JSON.stringify(user));
    addUser(user)
  }

  const logout = () => {
    console.log("----logout");
    removeUser()
  }

  return { user, login, logout, setUser }
}
