import { connect } from 'react-redux';
import UserAddComponent from '../../components/user-add/index';
import { addUser } from '../../actions/actions';

// const mapStateToProps = state => ({
//   isOpen: state.isOpen,
//   users: state.users,
// });


const mapDispatchToProps = {
  addUser,
};

export default connect(null, mapDispatchToProps)(UserAddComponent);

