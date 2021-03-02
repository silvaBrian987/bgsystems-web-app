import React, { useEffect, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons'

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
    ],
    specializations: [
        'Web Design',
        'Front-end and back-end coding',
        'CI/CD pipelines',
        'Custom databases',
        'User Interface/User Experience',
        'Design Thinking',
        'Full Stack Web and Multiplatform Mobile App Development'
    ],
    contactInfo: {
        telephone: '+54 011 1557424462',
        email: 'silva.brian.987@gmail.com',
        linkedin: '@briansilva',
        address: 'Medrano 184, CABA, Argentina',
        webpage: 'bgsystems.ml'
    },
    academicBackground: [
        {
            name: 'Game Developer',
            institution: 'Universidad Abierta Interamericana',
            period: {
                from: '2016',
                to: 'Present'
            },
            items: [
                'Game develoment with Unity, Blender, Reaper',
                'Minecraft map design'
            ]
        },
        {
            name: 'Computer Technician',
            institution: 'Escuela Tecnica N° 29',
            period: {
                from: '2007',
                to: '2012'
            },
            items: [
                'GUI applications development with C#, VB6 and VFoxpro',
                'Contability knowledge'
            ]
        }
    ],
    passionProjects: [
        'Develop games',
        'Being a youtuber',
        'Maintain game servers'
    ]
}

function About() {
    const [curriculum, setCurriculum] = useState({});
    useEffect(()=>{
        setCurriculum(defaultCurriculum);
    }, []);
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <ReactToPrint
                        trigger={() => {
                            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                            // to the root node of the returned component as it will be overwritten.
                            return <button className="btn btn-primary" style={{width: '100%'}} ><FontAwesomeIcon icon={faPrint} /> Print this out!</button>;
                        }}
                        content={() => document.getElementById('cvContainer')}
                    />
                </div>
            </div>
            <div id="cvContainer" className="container cv-container row" style={{ padding: '100px' }}>
                <div className="col-sm-5">
                    <div id="title" className="cv-section">
                        <div className="fakeimg"></div>
                        <h1 className="text-light">{curriculum.name}</h1>
                        <h4><i>{curriculum.position}</i></h4>
                    </div>
                    <div id="careerObjectives" className="cv-section">
                        <h5>Career Objectives</h5>
                        <hr />
                        <p>{curriculum.careerObjectives}</p>
                    </div>
                    <div id="specializations" className="cv-section">
                        <h5>Specializations</h5>
                        <hr />
                        <ul>
                            {
                                curriculum.specializations.map((item, key) => {
                                    return <li key={key}>{item}</li>;
                                })
                            }
                        </ul>
                    </div>
                    <div id="contactInfo" className="cv-section">
                        <h5>Contact Info</h5>
                        <hr />
                        <p>Telephone: {curriculum.contactInfo.telephone}</p>
                        <p>Email: {curriculum.contactInfo.email}</p>
                        <p>Linkedin: {curriculum.contactInfo.linkedin}</p>
                        <p>{curriculum.contactInfo.address}</p>
                        <p>{curriculum.contactInfo.webpage}</p>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div id="workSummary" className="cv-section">
                        <h5>Work Summary</h5>
                        <hr />
                        {
                            curriculum.workSummary.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <h5>{item.position.toUpperCase()}</h5>
                                        <h6>{item.employee} | {item.period.from} - {item.period.to}</h6>
                                        <ul className="text-light">
                                            {
                                                item.tasks.map((task, key) => {
                                                    return (
                                                        <li key={key}>{task}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div id="academicBackground" className="cv-section">
                        <h5>Academic Background</h5>
                        <hr />
                        {
                            curriculum.academicBackground.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <h5>{item.name.toUpperCase()}</h5>
                                        <h6>{item.institution} | {item.period.from} - {item.period.to}</h6>
                                        <ul className="text-light">
                                            {
                                                item.items.map((item, key) => {
                                                    return (
                                                        <li key={key}>{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div id="passionProjects" className="cv-section">
                        <h5>Passion Projects</h5>
                        <hr />
                        <ul>
                            {
                                curriculum.passionProjects.map((item, key) => {
                                    return <li key={key}>{item}</li>;
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;