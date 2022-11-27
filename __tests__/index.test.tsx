import { render, screen } from './test-utils';
import Index from '@/pages/index';
import { setupIntersectionObserverMock } from './__mocks__/intersection_observer';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '',
            pathname: '/',
            query: '',
            asPath: ''
        };
    }
}));

describe('Home', () => {
    beforeAll(() => {
        setupIntersectionObserverMock();
    });
    it('renders a home page with all sections', () => {
        render(<Index recentPosts={[]} />);
    });
});
