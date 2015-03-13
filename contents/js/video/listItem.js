var VideoListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.video)
        this.props.onListItemClicked(this.props.video.id)
    },

    render: function() {

        var video = this.props.video

        return ( 
            <div className="video row" >
                <div className="videoTitle six columns" onClick={this.handleClick}>
                    <b> {video.title} </b>                    
                </div>
            </div>
        )
  }
})