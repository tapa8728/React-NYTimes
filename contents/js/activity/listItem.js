var ActivityListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.activity)
        this.props.onListItemClicked(this.props.activity.subject_id)
    },

    render: function() {

        var activity = this.props.activity

        return (
            <div className="activity row" >
                <div className="activityType six columns" onClick={this.handleClick}>
                    <b>{activity.type}</b>   {activity.subject_name} 
                </div>
            </div>
        )
    }
})