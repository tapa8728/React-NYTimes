var BookView = React.createClass({

    getInitialState: function() {
        return {book: null}
    },

    render: function() {
        
        if (this.state.book){

            return ( 
                <div className="bookView">
                    <h4 className="bookTitle">
                        {this.state.book.title}
                    </h4>
                    <img src={this.state.book.thumbnail_large} ></img> <br/> 
                    <b> URL : </b> 
                    <a href={this.state.book.url}>{this.state.book.url}</a> <br/>   
                    <b> Upload_date : </b> {this.state.book.upload_date} <br/>
                    <b> Uploaded_by : </b> {this.state.book.user_name} <br/> 
                    <b> Likes : </b> {this.state.book.stats_number_of_likes} <br/>   
                    <b> Plays : </b> {this.state.book.stats_number_of_plays} <br/>
                    <b> Comments : </b> {this.state.book.stats_number_of_comments} <br/>   
                    <b> Duration : </b> {this.state.book.duration}   sec<br/>
                    <b> Description : </b> {this.state.book.description}<br/>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})