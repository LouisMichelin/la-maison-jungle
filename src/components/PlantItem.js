import CareScale from './CareScale'
import '../styles/PlantItem.css'

// import { useState } from 'react'

// function handleClick(e) {
//   console.log('✨ Ceci est mon event :', e)
// }

// function handleSubmit(e) {
//   e.preventDefault()
//   alert(e.target['my_input'].value)
// }
// onClick={() => handleClick(name)}




function PlantItem({ id, cover, name, water, light }) {

  // const [inputValue, setInputValue] = useState('Posez votre question ici')

	return (
		<li key={id} className='lmj-plant-item' >
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>

		{/* <form onSubmit={handleSubmit}>
			<input type='text' name='my_input' defaultValue='Tapez votre texte' />
			<button type='submit'>Entrer</button>
		</form>

		<div>
		<textarea
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value)}
		/>
		<button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
      </div> */}
		</li>
	)
}

export default PlantItem