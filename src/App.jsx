import { useEffect, useState } from 'react';
import JobInfo from './JobInfo.jsx';
import BtnContainer from './BtnContainer.jsx';

const url = 'https://www.course-api.com/react-tabs-project';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [currentItem, setCurrentItem] = useState(0);

	const fetchJobs = async () => {
		const response = await fetch(url);
		const newJobs = await response.json();
		setJobs(newJobs);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	if (isLoading) {
		return (
			<section className="jobs-center">
				<div className="loading"></div>
			</section>
		);
	}

	return (
		<section className="jobs-center">
			<BtnContainer
				jobs={jobs}
				currentItem={currentItem}
				setCurrentItem={setCurrentItem}
			/>

			<JobInfo jobs={jobs} currentItem={currentItem} />
		</section>
	);
}

export default App;
