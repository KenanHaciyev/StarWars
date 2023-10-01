import { HTTP, SWAPI_PEOPLE, SWAPI_ROOT } from '@constants/api';
import styles from './PeoplePage.module.css';

import { getApiResource } from '@utils/network';
import { useEffect, useState } from 'react';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PropTypes from 'prop-types';

const PeoplePage = ({ setErrorApi }) => {
	const [people, setPeople] = useState(null);

	const getResource = async url => {
		const body = await getApiResource(url);

		if (body) {
			const people = body.results.map(({ name, url }) => {
				const id = getPeopleId(url);
				const img = getPeopleImage(id);
				return {
					id,
					name,
					img,
				};
			});
			setPeople(people);
			setErrorApi(false);
		} else {
			setErrorApi(true);
		}
	};

	useEffect(() => {
		getResource(HTTP + SWAPI_ROOT + SWAPI_PEOPLE);
	}, []);

	return (
		<>
			<h1>Navigation</h1>
			{people && <PeopleList people={people} />}
		</>
	);
};

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
