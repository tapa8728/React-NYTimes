var BookList = React.createClass({displayName: 'BookList',

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
        var book = _.find(this.state.data, {id: id})
        this.refs.bookView.setState({book:book})
    },

    render: function() {

        var self = this;

        var books = this.state.data.map(function (book) {
        
          return (    
            <BookListItem book={book} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="bookPage">
                <div className="bookList six columns">
                    {books}
                </div>
                <div className="bookView six columns">
                    <BookView ref="bookView"/>
                </div>
            </div>
        )
    }
})
