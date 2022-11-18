import '../styles/Footer.css';
import styled from 'styled-components';
const Footer = () => {
  return (
    <Wrapper className="row">
        <LeftMenu className="col-6 p-5">
            <p className=''>© Crossroads Christian Communications Inc. </p>
        </LeftMenu>
        <RightMenu className="col-6 p-5">
            <p>Read News & Updates </p>
            <p>
                Scripture quotations in “Bible Materials” are from the ESV translation
                {/* <span className="material-symbols-outlined">open_in_new</span> */}
            </p>
        </RightMenu>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
    display: flex;
    overflow:hidden;
    flex-direction: row;
    align-items: center;
    border-top: 3px solid #ADCFD4;
`;

const LeftMenu = styled.div`

`;

const RightMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`;