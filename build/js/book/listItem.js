var BookListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.book)
        this.props.onListItemClicked(this.props.book.id)
    },

    render: function() {

        var book = this.props.book

        return ( 
            <div className="book row" >
                <div className="bookTitle six columns" onClick={this.handleClick}>
                    <b> {book.title} </b>                    
                </div>
            </div>
        )
  }
})