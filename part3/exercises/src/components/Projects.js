import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index < data.projects.length-1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }
    
    let projects = data.projects;
    let project = projects[index];

    return (
        <div>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>{project.canvas} by {project.artist}</h2>
            <img src={project.photoURL} alt={project.alt} />
        </div>
    );
}