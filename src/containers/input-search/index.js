import {connect} from 'react-redux'
import InputSearch from '../../components/input-search';
import {typing} from '../../store/actions/issuesActions'




function mapStateToProps({issueReducer}) {
    return { autoComplete:issueReducer.autoComplete }
  }

export default connect(mapStateToProps,{typing})(InputSearch);