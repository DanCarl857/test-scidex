import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';

// Make use of custom styles
import './../App.css';

class Animation extends Component {
    render() {
        return (
            <div>
                <h3 className="center-text">Animation</h3>
                <br />
                <Grid>
                    <Col md={4}>
                        <div className="button grow">
                            grow on hover
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="button shrink">
                            shrink on hover
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="button colorChange">
                            color change on hover
                        </div>
                    </Col>
                </Grid>
            </div>
        )
    }
}

export default Animation;