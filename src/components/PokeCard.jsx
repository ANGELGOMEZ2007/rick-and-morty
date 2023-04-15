import usePoke from "../hooks/usePoke";

const PokeCard = ({ url }) => {

    const pokemon = usePoke(url)

    
    return (
        <article>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <h2>{pokemon?.name}</h2>
            <h3>stats</h3>
            <ul>
                {
                    pokemon?.stats.map(statInfo => (
                        <li key={statInfo.stat.url}>{`${statInfo.stat.name}-${statInfo.base_stat}`}</li>
                    ))
                }
            </ul>
            <h3>types</h3>
            <ul>
                {
                    pokemon?.types.map(typeInfo => (
                        <li key={typeInfo.type.url}>{`${typeInfo.type.name}`}</li>
                    ))
                }
            </ul>
        </article>
    )
}

export default PokeCard