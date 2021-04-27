import Enzyme from 'enzyme';
import Adaptor from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adaptor() });
