import React, { useState } from 'react'
import { Dropdown, FormControl  } from 'react-bootstrap';

import StateProductList from './StateProductList';

class DropdownMenu extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            showComponent: false,
            imagesArray:[]
            };
            this.onSelectState = this.onSelectState.bind(this);
        }
        // The forwardRef is important!!
        // Dropdown needs access to the DOM node in order to position the Menu
        CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
            <a
            href="sdasd"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            >
            {children}
            &#x25bc;
            </a>
        ));
        // forwardRef again here!
        // Dropdown needs access to the DOM of the Menu to measure it
        CustomMenu = React.forwardRef(
            ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');
        
            return (
                <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
                >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                    (child) =>
                        !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
                </div>
            );
            },
        );
        onSelectState = (value) => {
            const APP_ID = 'yRG-iOe_CgmR5je_oMeU901kifirnqjYX6JQdAUDNkM';
            fetch('https://api.unsplash.com/photos/?client_id=' + APP_ID)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        imagesArray: data,
                        showComponent: true,
                    });
                    
                })
                .catch(err => {
                    console.log('Error happened during fetching!', err);
                });
                
        }
    render(){
        if(this.state.imagesArray.length > 0 ){
            return (
                <StateProductList images={this.state.imagesArray} />
            )
        }
        return (
            <Dropdown>
                <Dropdown.Toggle as={this.CustomToggle} id="dropdown-custom-components"></Dropdown.Toggle>

                <Dropdown.Menu as={this.CustomMenu}>
                    <Dropdown.Item eventKey="New York" onSelect={this.onSelectState}>New York</Dropdown.Item>
                    <Dropdown.Item eventKey="California" onSelect={this.onSelectState}>California</Dropdown.Item>
                    <Dropdown.Item eventKey="Illinois" onSelect={this.onSelectState}>Illinois</Dropdown.Item>
                    <Dropdown.Item eventKey="Texas" onSelect={this.onSelectState}>Texas</Dropdown.Item>
                    <Dropdown.Item eventKey="Florida" onSelect={this.onSelectState}>Florida</Dropdown.Item>
                    <Dropdown.Item eventKey="North Carolina" onSelect={this.onSelectState}>North Carolina</Dropdown.Item>
                    <Dropdown.Item eventKey="Michigan" onSelect={this.onSelectState}>Michigan</Dropdown.Item>
                    <Dropdown.Item eventKey="Nevada" onSelect={this.onSelectState}>Nevada</Dropdown.Item>    
                </Dropdown.Menu>
            </Dropdown>
        )
    }
    
}

export default DropdownMenu
