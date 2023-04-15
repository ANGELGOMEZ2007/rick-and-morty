import axios from "axios"
import { useEffect, useState } from "react"

const usePoke = (url) => {

    const [pokeapis, setPokeapis] = useState()

    useEffect(() => {


        axios.get(url)
            .then(res => {
                setPokeapis(res.data)
            })
            .catch(err => console.log(err))

    }, [url])

    return pokeapis



}

export default usePoke