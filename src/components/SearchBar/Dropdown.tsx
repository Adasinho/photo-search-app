import React from 'react';
import {IDropdownLink} from "../../types";
import styled from "styled-components";

const DropdownContainer = styled.div`
    position: relative;
    color: black;
`;

const DropdownContent = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    margin-top: 4px;
    padding: 5px 0;
    background: #fff;
    z-index: 9999;
`;

const DropdownItem = styled.li`
    padding: 10px 20px;
    &:hover {
        cursor: pointer;
        background: #eee;
    }
`;

interface DropdownProps {
    links: IDropdownLink[]
}

const Dropdown: React.FC<DropdownProps> = props => {
    const {links} = props;

    const linkToItem = (link: IDropdownLink) => {
        return (
            <DropdownItem>
                <a href={link.path}>{link.name}</a>
            </DropdownItem>
        )
    }

    return (
        <DropdownContainer>
            <DropdownContent>
                <ul>
                    {links.map(linkToItem)}
                </ul>
            </DropdownContent>
        </DropdownContainer>
    );
};

export default Dropdown;