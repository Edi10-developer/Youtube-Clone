import styled from 'styled-components';

const SideMenuStyledDiv = styled.div`
   border: 1px solid black;
   width: 25rem;
   height: 35rem;

   ul{
   width: 100%;
   margin: 0;
   margin-left: -10%;
}
   ul li{
      list-style-type: none;
      border: 1px solid #ccc;
      padding: 1rem;
   }
   ul li a{
      text-decoration: none;
      color: #606060;
   }
   ul li:hover{
      background-color: rgb(245, 245, 245);
   }
`;

export { SideMenuStyledDiv };