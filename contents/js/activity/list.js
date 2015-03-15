var ActivityList = React.createClass({displayName: 'ActivityList',

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

    handleListItemClicked: function(subject_id){
        var activity = _.find(this.state.data, {subject_id: subject_id})
        this.refs.activityView.setState({activity:activity})
    },

    render: function() {

        var self = this;

        var activities = this.state.data.map(function (activity) {

            return (
                <ActivityListItem activity={activity} onListItemClicked={self.handleListItemClicked}/>
            )
        })

        return (
            <div className="activityPage">
                <div className="activityList six columns">
                    {activities}
                </div>
                <div className="activityView six columns">
                    <ActivityView ref="activityView"/>
                </div>
            </div>
        )
    }
})
