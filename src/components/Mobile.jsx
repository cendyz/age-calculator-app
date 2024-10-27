const Mobile = () => {
	return (
		<main className='main'>
			<div className='main__box'>
				{times.map(time => {
					return <Top {...time} key={time.id} />;
				})}
			</div>
			<div className="main__btn">
			<button className='main__btn-box'>
				<img src='./src/img/icon-arrow.svg' alt='Arrow icon' className='main__btn-box-img' />
			</button>

			</div>

			<div className='main__content'>
				{times.reverse().map(time => {
					return <Bottom {...time} num={time.num} key={time.id} />;
				})}
			</div>
		</main>
	);
};

const times = [
	{
		time: "days",
		num: 26,
		id: 1,
	},
	{
		time: "months",
		num: 3,
		id: 2,
	},
	{
		time: "years",
		num: 38,
		id: 3,
	},
];

const Top = props => {
	const { time } = props;
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
	const { time, num, id } = props;

	return (
		<p className='main__content-text' id={id}>
			{num} <span>{time}</span>
		</p>
	);
};

export default Mobile;
