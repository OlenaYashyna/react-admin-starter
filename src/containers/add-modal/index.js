import { connect } from 'react-redux';
import BtnAddModal from '../../components/button-add-modal/index';
import { addModal } from '../../actions/actions';

const mapStateToProps = state => ({
  isOpen: state.isOpen,
  users: state.users,
});


const mapDispatchToProps = {
    addModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnAddModal);

