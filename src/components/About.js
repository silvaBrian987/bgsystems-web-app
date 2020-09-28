import React, { useState } from 'react';

const aquaMarine = 'rgb(41, 243, 195)';

const defaultCurriculum = {
    name: 'Brian Silva',
    position: 'DevOps Engineer',
    careerObjectives: `DevOps Engineer specializing in full stack
    development. Experienced with development lifecycle for dynamic web projects. Well-versed in
    numerous programming languages including Java,
    NodeJS, Python, React.js, Angular.js and MSSQL.
    Strong background in project management. I have
    worked in the banking and private medical business
    area`,
    workSummary: [
        {
            position: 'DevOps Engineer',
            employee: 'Swiss Medical Group',
            period: {
                from: '2018',
                to: 'Current'
            },
            tasks: [
                'Automatization of application development',
                'Created common components for the company web development',
                'Software design'
            ]
        },
        {
            position: 'Senior Java Developer',
            employee: 'Banco Galicia',
            period: {
                from: '2014',
                to: '2018'
            },
            tasks: [
                'Web development with Java and AngularJS',
                'Designed and coded websites, from layout to function, according to client specifications'
            ]
        }
    ]
}

const cvSectionTitleSeparatorStyle = { borderColor: aquaMarine, borderWidth: '4px' };

function About() {
    const [curriculum, setCurriculum] = useState(defaultCurriculum);
    return (
        <div className="container bg-dark" style={{ color: aquaMarine, marginBottom: '100px' }}>
            <div className="row" style={{ marginLeft: '15px', paddingTop: '100px' }}>
                <div className="col-sm-5">
                    <div id="title" className="cv-section">
                        <div className="fakeimg"></div>
                        <h1 className="text-light">Brian Silva</h1>
                        <h5><i>DevOps Engineer</i></h5>
                    </div>
                    <div id="careerObjectives" className="cv-section text-light">
                        <h5>Career Objectives</h5>
                        <hr style={cvSectionTitleSeparatorStyle} />
                        <p>{curriculum.careerObjectives}</p>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div id="workSummary" className="cv-section">
                        <h5>Work Summary</h5>
                        <hr style={cvSectionTitleSeparatorStyle} />
                        {
                            curriculum.workSummary.map(item => {
                                return (
                                    <div>
                                        <h6>{item.position.toUpperCase()}</h6>
                                        <h7>{item.employee} | {item.period.from} - {item.period.to}</h7>
                                        <ul className="text-light">
                                            {
                                                item.tasks.map(task => {
                                                    return (
                                                        <li>{task}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;