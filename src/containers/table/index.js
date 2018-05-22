import { connect } from 'react-redux';
import TableAdd from '../../components/table/index';
import { getUsers } from '../../actions/actions';

const mapStateToProps = state => ({
  pending: state.pending,
  users: state.users,
});

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableAdd);

