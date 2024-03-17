import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { useLocalStorage } from "./useLocalStorage"

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext)
  const { setItem } = useLocalStorage()

  const addUser = user => {
    setUser(user)
    console.log("useUser:   "+JSON.stringify(user));
    setItem("user", JSON.stringify(user))
  }

  const removeUser = () => {
    setUser(null)
    setItem("user", "")
  }

  return { user, addUser, removeUser, setUser }
}
