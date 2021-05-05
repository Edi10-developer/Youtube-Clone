import styled from 'styled-components';

const SearchDiv = styled.div`
    padding: 3.4rem;
    display: flex;

    .input-field{
        flex-grow: 7;
        
        height: 2.5rem;
        padding-left: 2rem;
        font-size: 16px;
        font-weight: 600;
        color: rgba(0, 0, 0, .7);
    }

    button{
        flex-grow: 2;
        height: 2.9rem;
    }
`;

export { SearchDiv };