
import React from 'react';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const Openapi = () => <SwaggerUI url="http://192.168.56.109:8000/openapi?format=openapi-json" />;


export default Openapi;
