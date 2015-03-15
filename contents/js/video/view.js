var VideoView = React.createClass({

    getInitialState: function() {
        return {video: null}
    },

    render: function() {
        
        if (this.state.video){

            return ( 
                <div className="videoView">
                    <h4 className="videoTitle">
                        {this.state.video.title}
                    </h4>
                    <img src={this.state.video.thumbnail_large} ></img> <br/> 
                    <b> URL : </b> 
                    <a href={this.state.video.url}>{this.state.video.url}</a> <br/>   
                    <b> Upload_date : </b> {this.state.video.upload_date} <br/>
                    <b> Uploaded_by : </b> {this.state.video.user_name} <br/> 
                    <b> Likes : </b> {this.state.video.stats_number_of_likes} <br/>   
                    <b> Plays : </b> {this.state.video.stats_number_of_plays} <br/>
                    <b> Comments : </b> {this.state.video.stats_number_of_comments} <br/>   
                    <b> Duration : </b> {this.state.video.duration}   sec<br/>
                    <b> Description : </b> {this.state.video.description}<br/>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})