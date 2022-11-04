import React from 'react';

export default function Exercise(props) {
    let classProps = props;
    return (
        <div className="d-flex justify-content-center flex-column">
            <div className="text-center">
                <div className="d-flex justify-content-center mb-5">
                    <div className="md-rot me-1"><h2>Welcome</h2></div>
                    <div className="md-rot me-1"><h2>to</h2></div>
                    <div className="md-rot"><h2>{classProps.class_name}</h2></div>
                </div>
                <h3 className="md-rot mb-5"
                >React JS Programming Week09 Lab exericse</h3>
                <h4 className="slow-rot mb-5"
                >{ classProps.sid == "" ? "000" : classProps.sid }</h4>
                <h4 className="slow-rot mb-5"
                >{ classProps.name == "" ? "000" : classProps.name }</h4>
                
                <div className="d-flex justify-content-center">
                    <div className="md-rot">
                        { classProps.college }
                    </div>
                    <div>,</div>
                    <div className="md-rot">
                        { classProps.location }
                    </div>
                </div>
            </div>
        </div>
    );
}