import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import _ from 'lodash';
import { Col } from 'react-bootstrap';

// Make use of custom styles
import './../App.css';

// Import action creator for photos
import { getAllPhotos } from './../actions/photos.action';

class Photos extends Component {

    componentWillMount() {
        this.props.getAllPhotos();
        // console.log(this.props.data);
    }

    constructor(props) {
        super(props);

        this.state = {}

        this.renderPhotos = this.renderPhotos.bind(this);
    }

    // function to render photos
    renderPhotos() {
        
        // check if loading property is true
        if (this.props.loading) {
            return (
                <div className="outer">
                    <div className="inner">
                        <img src={require('./../assets/35.gif')} alt="loading" height="80" width="80" />
                        <p style={{ marginTop: 15 }}>Getting photos...</p>
                    </div>
                </div>
            )
        } else { // once loading is done, data is now available
            if (_.isEmpty(this.props.data)) {
                return (
                    <div>
                        <p>No photos yet!</p>
                    </div>
                )
            } else {
                return _.map(this.props.data, (photo, key) => {
                    return (
                        <Col key={key} md={2} className="col-half-offset">
                            <img src={photo.thumbnailUrl} alt="thumbnail" style={{ marginBottom: 50 }}/>
                        </Col>
                    );
                })
            }
        }
    }

    render() {
        return (
            <div>
                <h3 className="center-text">Photos</h3>
                <br />
                <Grid>
                    {this.renderPhotos()}
                </Grid>
            </div>
        )
    }
}

// Map redux state to component props
function mapStateToProps(state) {
    return {
        data: state.photos.data,
        loading: state.photos.loading
    };
}

export default connect(mapStateToProps, { getAllPhotos })(Photos);