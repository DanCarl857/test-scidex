import React, { Component } from 'react';
import { Grid, FormControl, FormGroup, Button, Col } from 'react-bootstrap';

// Make use of custom styles
import './../App.css';

class Search extends Component {
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

                    </div>
                </Grid>
            </div>
        )
    }
}

export default Search;