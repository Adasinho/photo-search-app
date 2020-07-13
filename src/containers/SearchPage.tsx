import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import {getRandomImage} from "../services/unsplash";
import SearchBar from "../components/SearchBar";

interface SearchPageProps {

}

const SearchPage: React.FC<SearchPageProps> = props => {
    const [background, setBackground] = useState("");

    const BackgroundImage = styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
        
        height: 100vh;
        width: 100%;
        
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background});
        background-size: cover;
        background-position: center;
    `;

    const A = styled.a`
        text-decoration: underline !important;
    `

    useEffect(() => {
        getRandomImage().then(photo => {
            console.log(photo);
            setBackground(photo.urls.regular);
        })
    }, [])

    return (
        <BackgroundImage>
            <div className={"container"}>
                <div className={"row"}>
                    <header className={"w-100"}>
                        <div className={"h1"}>Unsplash</div>
                        <div className={"py-3"}>
                            <div className={"h5 font-weight-normal"}>The Internet's source of <A href={"/"}>freely-usable-images.</A> </div>
                            <div className={"h5 font-weight-normal"}>Powered by creators everywhere.</div>
                        </div>
                        <SearchBar/>
                    </header>
                </div>
            </div>
        </BackgroundImage>
    );
};

export default SearchPage;