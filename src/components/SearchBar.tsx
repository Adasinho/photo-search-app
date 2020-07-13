import React, {useState} from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {

}

const Form = styled.form`
    display: flex;
    width: 100%;
    background-color: white;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 0 15px;
`;

const Input = styled.input`
    flex: 1;
    padding: 10px 0;
`;

const SearchBar: React.FC<SearchBarProps> = props => {
    const [searchedPhrase, setSearchedPhrase] = useState("");

    return (
        <Form>
            <Button type={"submit"}>
                <FontAwesomeIcon icon={faSearch}/>
            </Button>
            <Input placeholder={"Search free high-resolution photos"}
                   value={searchedPhrase}
                   onChange={e => setSearchedPhrase(e.target.value)}
            />
            <Button type={"reset"}>
                <FontAwesomeIcon icon={faTimes}/>
            </Button>
        </Form>
    );
};

export default SearchBar;