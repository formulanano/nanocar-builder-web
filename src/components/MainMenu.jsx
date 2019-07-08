import React, {Component} from 'react';
import {Dropdown, Icon, Menu} from 'semantic-ui-react'

export default class MainMenu extends Component {
    render() {
        return (<Menu attached='top'>
                <Dropdown item text='File' simple>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Icon name='dropdown'/>
                            <span className='text'>Open</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>URL</Dropdown.Item>
                                <Dropdown.Item>File</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>Save...</Dropdown.Item>
                        <Dropdown.Item>Close</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text="View" simple>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Icon name='dropdown'/>
                            <span className='text'>Open</span>

                            <Dropdown.Menu>
                                <Dropdown.Item>URL</Dropdown.Item>
                                <Dropdown.Item>File</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>Save...</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text="Tools" simple>
                    <Dropdown.Menu>
                        <Dropdown.Item>Tool1</Dropdown.Item>
                        <Dropdown.Item>Tool2</Dropdown.Item>
                        <Dropdown.Item>Tool3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text="Build">
                    <Dropdown.Menu>
                        <Dropdown.Item>Tool1</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Menu position='right'>
                    <div className='ui right aligned category search item'>
                        <div className='ui transparent icon input'>
                            <input className='prompt' type='text' placeholder='Search in atoms...'/>
                            <i className='search link icon'/>
                        </div>
                        <div className='results'/>
                    </div>
                    <Menu.Item
                        name='About Nanocar'
                        onClick={() => {
                        }}
                    />
                </Menu.Menu>
            </Menu>
        );
    }
}