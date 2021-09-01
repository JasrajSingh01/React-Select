import React from 'react';
import Select from 'react-select';

function MultiSelect() {

    const options = [
        { value: 'React', label: 'React' },
        { value: 'React Native', label: 'React Native' },
        { value: 'Vue', label: 'Vue' },
        { value: 'Angular', label: 'Angular' },
        { value: 'Redux', label: 'Redux' }
    ]

    return (
        <div className="select">   
            <Select isMulti options={options} />
        </div>
    )
}

export default MultiSelect
