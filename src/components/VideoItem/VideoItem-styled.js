import styled from 'styled-components';

const VideoItemStyledDiv = styled.div`
      display: flex;
      margin-left: -3rem;
      padding-left: 0rem;
      width: 22rem;
      border-bottom: 1px solid #ccc;
      padding: 0rem 5rem 0 0;
      box-shadow: 3px 7px 14px -4px rgba(0,0,0,0.45); 
      -webkit-box-shadow: 3px 7px 14px -4px rgba(0,0,0,0.45);
      -moz-box-shadow: 3px 7px 14px -4px rgba(0,0,0,0.45);
      cursor: pointer;
  }

  iframe{
        margin: .5rem;
        margin-top: 0;
        width: 15rem;
        float: left;
        cursor: pointer;
  }
  .side-content{
        text-align: left;
        margin-left: .2rem;
        border: none;
        padding: .2rem;
        min-height: 9.5rem; 
  }
  .side-content h3{
        font-size: 14px;
  }
}
`;

export { VideoItemStyledDiv };