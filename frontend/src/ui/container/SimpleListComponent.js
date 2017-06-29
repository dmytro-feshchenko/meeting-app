import { connect } from 'react-redux';
import ListComponent from '../component/ListComponent';

export default connect(
    state => ({ items: state.simple.items }),
    {}
);