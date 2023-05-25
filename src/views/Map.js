/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { fetchComments } from "redux/jsonReducer";
import { init } from "redux/jsonReducer";
import { initUser } from "redux/userReducer";


function Map() {


  const dispatch = useDispatch()
  const jsonData = useSelector((state) => state.json.data);
  useEffect(() => {
    dispatch(initUser())
    dispatch(init())
    dispatch(fetchComments())
  }, []);

  useEffect(() => {
    console.log('jsonData', jsonData)
  }, [jsonData]);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Google Maps</CardHeader>
              <CardBody>
                <div></div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Map;
