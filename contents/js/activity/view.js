var ActivityView = React.createClass({

    getInitialState: function() {
        return {activity: null}
    },

    render: function() {
        
        if (this.state.activity){

            return ( 
                <div className="activityView">
                    <h3 className="activityType">
                        {this.state.activity.type}
                    </h3>
                    <b> User Name : </b> {this.state.activity.user_name} <br/>
                    <b> Date : </b> {this.state.activity.date} <br/> 
                    <img src={this.state.activity.video_thumbnail_large} ></img> <br/> 
                    <b> Video url : </b> 
                    <a href={this.state.activity.video_url}>{this.state.activity.video_url}</a> <br/>   
                    <b> Video Title : </b> {this.state.activity.video_title} <br/>
                    <b> Video Tags : </b> {this.state.activity.video_tags} <br/>
                    <b> Follow/like: </b> {this.state.activity.subject_name} <br/>    
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})