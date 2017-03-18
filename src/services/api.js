import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest/client';
import superagent from 'superagent';
import reduxifyServices from 'feathers-reduxify-services';

let API = feathers()
	.configure(rest('/api').superagent(superagent))
	.configure(hooks());

let services = reduxifyServices(
	API,
	{
		'users': 'users',
	}
);

export default API;
export {
	services,
};