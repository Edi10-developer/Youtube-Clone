import styled from 'styled-components';

const VideoDiv = styled.div` 
        width: 63%;
        min-height: 40rem;
        border-radius: 7px;

        iframe{
            width: 100%;
            height: 34em;
            border-radius: 4px;
        }

        .description{
            text-align: left;
            border: 1px solid #ccc;
            padding: .4rem;
            margin-top: .6rem;
        }
`;

export { VideoDiv };