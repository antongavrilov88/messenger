import {expect} from 'chai';
import Router from '.././src/utils/Router';
import App from '../src/components/app/App';
import Route from '../src/utils/Rout';

describe('Should test "use" method of the Router class', () => {
	const router = new Router('.app');
	it('Check returning object in "use"-method. Should return true', () => {
		expect(router === router.use('/some', App)).to.be.true;
	});
	it('Check incrementing of routs', () => {
		router.use('/someother', App);
		expect(router.routes.length === 2).to.be.true;
	});
	it('Check adding correct rout to routs', () => {
		router.use('/onemore', App);
		let rout: string | Route = router.routes[router.routes.length - 1];
		expect(Object(rout)).to.eql(new Route('/onemore', App, {rootQuery: '.app'}));
	});
});
