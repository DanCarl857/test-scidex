import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, FormControl, FormGroup, Button, Col } from 'react-bootstrap';

// import action creators
import { getAllComments } from './../actions/comments.action';

// Make use of custom styles
import './../App.css';

// const comments = [];

class Search extends Component {

    componentWillMount() {
        this.props.getAllComments();
    }

    constructor(props) {
        super(props);

        this.state = {};

        this.renderComments = this.renderComments.bind(this);
    }

    renderComments() {
        console.log(this.props.data);

        /*
         * Logic: Put all comments in one array object 
         * ... and perform search on the array object 
         */

    }

    render() {
        return (
            <div>
                <h3 className="center-text">Search</h3>
                <br />
                <Grid>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                        >
                            <Col md={10}>
                                <FormControl
                                    type="text"
                                    placeholder="Search with auto-complete"
                                />
                            </Col>
                            <Col md={2}>
                                <Button bsStyle="info">Show</Button>
                            </Col>
                        </FormGroup>
                    </form>
                </Grid>
                <br /><br />
                <Grid>
                    <div className="box">
                        {this.renderComments()}
                    </div>
                </Grid>
            </div>
        )
    }
}

// map redux state to component props
function mapStateToProps(state) {
    return {
        data: state.comments.data,
        loading: state.comments.loading
    }
}

export default connect(mapStateToProps, { getAllComments })(Search);