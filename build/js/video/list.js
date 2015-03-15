var VideoList = React.createClass({displayName: 'VideoList',

    getInitialState: function() {
        return {data: []};
    },
  
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(id){
        var video = _.find(this.state.data, {id: id})
        this.refs.videoView.setState({video:video})
    },

    render: function() {

        var self = this;

        var videos = this.state.data.map(function (video) {
        
          return (    
            <VideoListItem video={video} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="videoPage">
                <div className="videoList six columns">
                    {videos}
                </div>
                <div className="videoView six columns">
                    <VideoView ref="videoView"/>
                </div>
            </div>
        )
    }
})
