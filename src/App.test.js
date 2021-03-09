import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

let wrapped = shallow(<App />);

describe('Title', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    it('should render the Title Component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });
});
