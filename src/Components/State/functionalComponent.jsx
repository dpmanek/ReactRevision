import React, { useEffect, useState } from 'react';

const FunctionalComponent = () => {
	//defining states using hooks
	const [name, setName] = useState('Deep Manek');
	const[age,setAge]=useState(43)
	const[address,changeAddress]=useState('India')
	const[data,setData]=useState({})

	// useEffect()>{
	// 	const data =axios()
	// 	setData(data)
	// }
	return (
		<>
			<h3>Learning States from your one and Only {name} and niravs age is {age} and address is {address}</h3>
			<button onClick={()=>changeAdrdess('USA')}>Change</button>
		</>
	);
};
export default FunctionalComponent;
