const Mobile = () => {
	const times = [
		{
			id: 1,
			time: "days",
			num: 26,
		},
		{
			id: 2,
			time: "months",
			num: 3,
		},
		{
			id: 3,
			time: "years",
			num: 38,
		},
	];

	const Top = props => {
		const { time } = props.times;
		return (
			<div className='main__box-content'>
				<label htmlFor={time} className='main__box-content-label'>
					{time}
				</label>
				<input type='text' className='main__box-content-input' />
			</div>
		);
	};

	const Bottom = props => {
		const { time } = props.times;
		const { num } = props;
		return (
			<p className='main__content-text'>
				{num} <span>{time}</span>
			</p>
		);
	};

	return (
		<main className='main'>
			<div className='main__box'>
				{times.map(({ time, id }) => {
					return <Top times={{ time }} key={id} />;
				})}
			</div>
			<button className='main__btn'>
				<img src='./src/img/icon-arrow.svg' alt='Arrow icon' className='main__btn-img' />
			</button>
                <hr />
			<div className='main__content'>
				{[...times].reverse().map(({ time, num, id }) => {
					return <Bottom times={{ time }} num={num} id={id} />;
				})}
			</div>
		</main>

		//   Day
		//   DD

		//   Month
		//   MM

		//   Year
		//   YYYY

		//   -- years
		//   -- months
		//   -- days
	);
};

export default Mobile;
