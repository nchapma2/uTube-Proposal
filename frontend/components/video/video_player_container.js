import { connect } from 'react-redux';
import VideoPlayer from './video_player';
import { fetchSingleVideo } from '../../actions/video_actions';
import { fetchComments } from '../../actions/comment_actions';
import { createLike, destroyLike } from '../../actions/like_actions';
import { createSubscription, destroySubscription } from '../../actions/subscription_actions';

const mapStateToProps = (state, { match }) => ({
  videoId: match.params.videoId,
  currentVideo: state.entities.videos.currentVideo,
  currentUser: state.session.currentUser || {}
});

const mapDispatchToProps = dispatch => ({
  fetchSingleVideo: videoId => dispatch(fetchSingleVideo(videoId)),
  fetchComments: videoId => dispatch(fetchComments(videoId)),
  createLike: like => dispatch(createLike(like)),
  destroyLike: like => dispatch(destroyLike(like)),
  createSubscription: subscription => dispatch(createSubscription(subscription)),
  destroySubscription: subscription => dispatch(destroySubscription(subscription)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
