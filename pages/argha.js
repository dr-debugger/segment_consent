import { useRouter } from "next/router"
import React from "react"

const Argha = () => {
  const router = useRouter()
  const apiCall = () => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        router.push(`/${data.name.split(" ").join("").toLowerCase()}`)
      })
      .catch((err) => console.log(err))
  }

  return <button onClick={apiCall}>God level coder</button>
}

export default Argha
